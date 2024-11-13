import { Button } from "antd";
import '../../../App.css'
import { ButtonUIProps } from "../../../../types";

const ButtonUI: React.FC<ButtonUIProps> = ({text, onClick, disabled, className  }) =>{
  return(
    <Button 
    onClick={onClick}
    htmlType="submit"
    type="primary" block className={className}
    disabled={disabled}>
      {text}
    </Button>

  )
}
export default ButtonUI
