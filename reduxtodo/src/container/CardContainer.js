import { connect } from "react-redux";
import { Card } from "../component/Card";
import { deleteTodo } from "../services/action/action";

const mapStateToProps = (state) => ({
  data: state.TodosReducer.todoData,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodoHandler: (data) => dispatch(deleteTodo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
