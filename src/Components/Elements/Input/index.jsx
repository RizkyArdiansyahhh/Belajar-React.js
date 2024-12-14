/* eslint-disable react/prop-types */
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
    const {id, children, type, placeholder} = props;
    
    return (
        <div className="mb-6">
            <Label htmlFor = {id}>{children}</Label>
            <Input id = {id} type = {type} placeholder = {placeholder}></Input>

        </div>
    )
}
export default InputForm;