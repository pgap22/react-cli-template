import Form from "src/component/form"
import Input from "src/component/Input"
import { Navigate } from "react-router-dom" //If you want to redirect when user complete the form
import useApi from "src/hooks/useAPI"
import { useFormulario } from "src/hooks/useFormulario"
import Button from "src/component/button" //Button with default styles

//export default FormComponent() <- add export default on your pages Component

function FormComponent() {
    
    //Same order is mandatory
    const api = useApi("/express_route");
    const campos = ["nombre", "password"] //Every Prisma field without id
    const [name, funciones] = useFormulario(campos, api)


    return (
        <>
            {/* You can put more html elements from here ! */}

            {/* to here */}

            <Form
                api={api}
                funciones={funciones}
            >
                <Input name={name.nombre} />
                <Input type="password" name={name.password} />

                <Button>Send !</Button>
            </Form>

            {/* You can put more html elements from here ! */}

            {/* to here */}

        </>
    )
}