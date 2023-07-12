import PropTypes from "prop-types";
// form
import { FormProvider as Form } from "react-hook-form";

// ----------------------------------------------------------------------

FormProvider.propTypes = {
  methods: PropTypes.object,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

export default function FormProvider({ methods, onSubmit, children }) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}> {children} </form>
    </Form>
  );
}
