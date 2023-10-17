function FieldsetLength () {
    return (
        <>
            <fieldset>
                <legend>Choose a length:</legend>
                <div className="list-item">
                    <input type="radio" id="short" name="length" value="short" defaultChecked />
                    <label htmlFor="short">short <small>(8 characters)</small></label>
                </div>
                <div className="list-item">
                    <input type="radio" id="long" name="length" value="long" />
                    <label htmlFor="long">long <small>(16 characters)</small></label>
                </div>
            </fieldset>
        </>
    )
}

export default FieldsetLength;