import * as assert from 'assert';
import { IndiaGstEngine, GSTInvoice } from '../indiaGstEngine';

suite('India GST Compliance Engine Test Suite', () => {
    test('GSTIN Validation works correctly', () => {
        const valid = IndiaGstEngine.validateGstin('07AAAAA0000A1Z5');
        assert.strictEqual(valid.isValid, true);
        assert.strictEqual(valid.stateCode, '07');
        assert.strictEqual(valid.pan, 'AAAAA0000A');

        const invalid = IndiaGstEngine.validateGstin('99INVALIDGSTIN');
        assert.strictEqual(invalid.isValid, false);
    });

    test('Intra-state tax computation splits CGST and SGST 50-50', () => {
        const invoice: GSTInvoice = {
            invoiceNumber: 'INV-001',
            invoiceDate: '2026-06-01',
            supplierGstin: '07AAAAA0000A1Z5',
            supplierStateCode: '07',
            recipientGstin: '07BBBBB1111B2Z6',
            recipientStateCode: '07',
            placeOfSupply: '07',
            isReverseCharge: false,
            isExportOrSez: false,
            items: [
                { id: '1', description: 'Consulting', hsnSacCode: '9983', taxableAmount: 10000, gstRate: 18 }
            ]
        };

        const result = IndiaGstEngine.computeInvoiceTaxes(invoice);
        assert.strictEqual(result.cgstTotal, 900);
        assert.strictEqual(result.sgstTotal, 900);
        assert.strictEqual(result.igstTotal, 0);
        assert.strictEqual(result.b2bCategory, 'B2B');
        assert.strictEqual(result.itcEligible, true);
    });

    test('Inter-state tax computation allocates 100% IGST', () => {
        const invoice: GSTInvoice = {
            invoiceNumber: 'INV-002',
            invoiceDate: '2026-06-01',
            supplierGstin: '07AAAAA0000A1Z5',
            supplierStateCode: '07',
            recipientStateCode: '08',
            placeOfSupply: '08', // Rajasthan
            isReverseCharge: false,
            isExportOrSez: false,
            items: [
                { id: '1', description: 'Goods', hsnSacCode: '1001', taxableAmount: 20000, gstRate: 12 }
            ]
        };

        const result = IndiaGstEngine.computeInvoiceTaxes(invoice);
        assert.strictEqual(result.cgstTotal, 0);
        assert.strictEqual(result.sgstTotal, 0);
        assert.strictEqual(result.igstTotal, 2400);
        assert.strictEqual(result.b2bCategory, 'B2C Small');
    });
});
