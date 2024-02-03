import PropTypes from "prop-types";
import styles from "./Button.module.css"

function Button({text}){
  // styles의(button.module.css) btn클래스 옵션 이용 / html에서 볼 시에 랜덤 이름으로 부여
  return <button className={styles.btn}>{text}</button>
}

Button.prototype= {
  text: PropTypes.string.isRequired,
}
export default Button