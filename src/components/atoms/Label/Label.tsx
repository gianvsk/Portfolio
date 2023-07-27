import '../../../style/style.scss'

type LabelProps = {
    num : '01' | '02' | '03'
}
 
export const Label = ({num}: LabelProps) => {

    return (
        <label className='label'>{num.toString()}</label>
    )

}