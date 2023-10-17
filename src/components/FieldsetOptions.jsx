function FieldsetOptions () {
    return (
        <>
            <fieldset>
                <legend>Other options:</legend>
                <div className="list-item">
                    <input type="checkbox" id="lowercaseChars" name="options" value="lowercaseChars" defaultChecked />
                    <label htmlFor="lowercaseChars">lowercase</label>
                </div>
                <div className="list-item">
                    <input type="checkbox" id="uppercaseChars" name="options" value="uppercaseChars" defaultChecked />
                    <label htmlFor="uppercaseChars">uppercase</label>
                </div>
                <div className="list-item">
                    <input type="checkbox" id="numericChars" name="options" value="numericChars" defaultChecked />
                    <label htmlFor="numericChars">numeric</label>
                </div>
                <div className="list-item">
                    <input type="checkbox" id="specialChars" name="options" value="specialChars" defaultChecked />
                    <label htmlFor="specialChars">special characters</label>
                </div>
            </fieldset>
        </>
    )
}

export default FieldsetOptions;