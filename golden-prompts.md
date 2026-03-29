# Golden Prompt Set - Rental Property Analyzer

This document contains test prompts to validate the Rental Property Analyzer connector's metadata and behavior.

## Purpose
Use these prompts to test:
- **Precision**: Does the right tool get called?
- **Recall**: Does the tool get called when it should?
- **Accuracy**: Are the right parameters passed?

---

## Direct Prompts (Should ALWAYS trigger the connector)

### 1. Explicit Tool Name
**Prompt**: "Show me a rental property calculator"
**Expected**: ✅ Calls `rental-property-calculator` with default values
**Status**: [ ] Pass / [ ] Fail

### 2. Specific Purchase Price
**Prompt**: "Analyze a $500,000 rental property"
**Expected**: ✅ Calls `rental-property-calculator` with purchase_price=500000
**Status**: [ ] Pass / [ ] Fail

### 3. Purchase Price + Rent
**Prompt**: "Analyze a $500,000 rental with $3,000/month rent"
**Expected**: ✅ Calls `rental-property-calculator` with purchase_price=500000, monthly_rent=3000
**Status**: [ ] Pass / [ ] Fail

### 4. Full Financing Details
**Prompt**: "Calculate cash flow on a $500k rental, 20% down, 6.5% rate, 30-year loan, rent $3,000"
**Expected**: ✅ Calls `rental-property-calculator` with purchase_price=500000, down_payment_pct=20, interest_rate_pct=6.5, loan_term_years=30, monthly_rent=3000
**Status**: [ ] Pass / [ ] Fail

### 5. Multi-Family Property
**Prompt**: "Analyze the return of a multifamily property"
**Expected**: ✅ Calls `rental-property-calculator` with default values
**Status**: [ ] Pass / [ ] Fail

---

## Indirect Prompts (Should trigger the connector)

### 6. ROI Question
**Prompt**: "What's the ROI on a $450,000 rental with $3,200/month rent?"
**Expected**: ✅ Calls `rental-property-calculator` with purchase_price=450000, monthly_rent=3200
**Status**: [ ] Pass / [ ] Fail

### 7. Cash Flow Query
**Prompt**: "Calculate cashflow on this triplex"
**Expected**: ✅ Calls `rental-property-calculator` with default values
**Status**: [ ] Pass / [ ] Fail

### 8. Cap Rate Question
**Prompt**: "What's the cap rate on a $600k property with $4,000 monthly rent?"
**Expected**: ✅ Calls `rental-property-calculator` with purchase_price=600000, monthly_rent=4000
**Status**: [ ] Pass / [ ] Fail

### 9. Investment Comparison
**Prompt**: "Should I buy a rental property for $350,000?"
**Expected**: ✅ Calls `rental-property-calculator` with purchase_price=350000
**Status**: [ ] Pass / [ ] Fail

### 10. Detailed Scenario
**Prompt**: "Analyze a duplex: purchase $520,000, 20% down, 6.25% APR, rent $3,800, vacancy 6%, taxes $6,200, insurance $1,800"
**Expected**: ✅ Calls `rental-property-calculator` with all parameters populated
**Status**: [ ] Pass / [ ] Fail

---

## Negative Prompts (Should NOT trigger the connector)

### 11. Real Estate Search
**Prompt**: "Find me a house in California"
**Expected**: ❌ Does NOT call `rental-property-calculator` (use web search)
**Status**: [ ] Pass / [ ] Fail

### 12. General Advice
**Prompt**: "Is now a good time to buy a house?"
**Expected**: ❌ Does NOT call `rental-property-calculator` (general advice)
**Status**: [ ] Pass / [ ] Fail

### 13. Legal Question
**Prompt**: "What are the tax implications of owning rental property?"
**Expected**: ❌ Does NOT call `rental-property-calculator` (general knowledge)
**Status**: [ ] Pass / [ ] Fail

### 14. Unrelated Topic
**Prompt**: "What's the weather today?"
**Expected**: ❌ Does NOT call `rental-property-calculator` (unrelated)
**Status**: [ ] Pass / [ ] Fail

### 15. Home Purchase (Not Rental)
**Prompt**: "Calculate my mortgage payment for a home I'll live in"
**Expected**: ⚠️ May or may not call `rental-property-calculator` (primary residence, not rental investment)
**Status**: [ ] Pass / [ ] Fail

---

## Edge Cases

### 16. Ambiguous Intent
**Prompt**: "Help me with a property"
**Expected**: ⚠️ May or may not call `rental-property-calculator` (clarification may be needed)
**Status**: [ ] Pass / [ ] Fail

### 17. VA Loan Scenario
**Prompt**: "Analyze a rental with VA zero-down loan at $400,000"
**Expected**: ✅ Calls `rental-property-calculator` with purchase_price=400000 and VA loan preset
**Status**: [ ] Pass / [ ] Fail

### 18. Appreciation Scenario
**Prompt**: "How does 3% vs 4% appreciation affect profit when sold?"
**Expected**: ✅ Calls `rental-property-calculator` to compare scenarios
**Status**: [ ] Pass / [ ] Fail

### 19. Holding Period
**Prompt**: "What's my return if I hold a $500k rental for 10 years?"
**Expected**: ✅ Calls `rental-property-calculator` with purchase_price=500000, holding_length_years=10
**Status**: [ ] Pass / [ ] Fail

### 20. Expense-Heavy Query
**Prompt**: "Analyze a $700k rental with $8,000 taxes, $2,400 insurance, $300/month HOA, and $2,000 maintenance"
**Expected**: ✅ Calls `rental-property-calculator` with all expense parameters populated
**Status**: [ ] Pass / [ ] Fail

---

## Testing Instructions

### How to Test
1. Open ChatGPT in **Developer Mode**
2. Link your Rental Property Analyzer connector
3. For each prompt above:
   - Enter the exact prompt
   - Observe which tool gets called
   - Check the parameters passed
   - Verify the widget renders correctly
   - Mark Pass/Fail in the Status column

### Success Criteria
- **Direct prompts**: 100% recall (5/5 should trigger)
- **Indirect prompts**: 80%+ recall (4/5 should trigger)
- **Negative prompts**: 100% precision (0/5 should trigger)
- **Edge cases**: Document behavior for future reference

### Tracking Results
Create a log entry for each test run:

```
Date: 2025-03-29
Metadata Version: v1.0
Results:
- Direct: 5/5 ✅
- Indirect: 4/5 ⚠️
- Negative: 5/5 ✅
- Edge: 4/5 ⚠️

Action Items:
- (list any metadata tweaks needed)
```

---

## Iteration Log

### Version 1.0 (2025-03-29)
- Rewritten for Rental Property Analyzer
- 20 prompts covering direct, indirect, negative, and edge cases
- Aligned tool name and parameters with `rental-property-calculator` MCP tool
