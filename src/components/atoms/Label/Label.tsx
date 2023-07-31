import '../../../style/style.scss'
import { Text } from '../Text/Text'

type LabelProps = {
    num : string
}
 
export const Label = ({num}: LabelProps) => {

    return (
        <Text tag='label' modifier='text-align-left' color='grey-label'>{num.toString()}</Text>
    )

}