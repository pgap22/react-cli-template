import TablaCRUD from "src/component/tablaCrud"
import useApi from "src/hooks/useAPI"

//export default TablaCore() <- add export default on your pages Component

export default function TablaCore(){

    const api = useApi("/your_express_route")

    return (
        <>
        {/* You can put more html elements from here ! */}
        
        {/* to here */}
        
        <TablaCRUD name={"your_express_route_without_slash"} api={api} />

        {/* You can put more html elements from here ! */}
        
        {/* to here */}
        
        </>
    )
}