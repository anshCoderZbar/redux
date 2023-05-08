import { connect } from "react-redux";
import { FormInput } from "../component/FormInput";
import { addTodo } from "../services/action/action";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodoHandler: (data) => dispatch(addTodo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
