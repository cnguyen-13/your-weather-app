const { getFormattedTime } = require("../../HelperFunctions/getFormattedTime");
test('getFormattedTime Function Test #1', () => {
    //1596219979713
    const randomFormatted = `01:26:09 PM`
    expect(randomFormatted).toBe(getFormattedTime(1596219969713))
})

test('getFormattedTime Function Test #2', () => {
    //1402999152871
    const randomFormatted = `04:59:12 AM`; 
    expect(randomFormatted).toBe(getFormattedTime(1402999152871))    

})

test('getFormattedTime Function Test #3', () => {
    //1511990020111
    const randomFormatted = `03:13:40 PM`; 
    expect(randomFormatted).toBe(getFormattedTime(1511990020111))
    
})

test('getFormattedTime Function Test #4', () => {
    //1571829109219
    const randomFormatted = `06:11:49 AM`; 
    expect(randomFormatted).toBe(getFormattedTime(1571829109219))
})
