import { Suspense } from "react"
import ClientesClient from "./clientes-client"

export default function ClientesPage() {
    return (
        <Suspense fallback={null}>
            <ClientesClient />
        </Suspense>
    )
}