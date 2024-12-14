/* eslint-disable react/prop-types */
const Input = (props) => {
    const {id, type, placeholder} = props;
return (
    <input id={id} type={type} className="text-sam border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"  placeholder={placeholder} name={id}/>
)
}

export default Input;