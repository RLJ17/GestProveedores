
export default function ConfirmAdvise({ onClose, onConfirm }) {
    return (
        <>
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
                <div className="bg-white py-12 px-6 rounded-md shadow-lg space-y-10">
                    <p className="text-2xl">¿Estás seguro de que deseas eliminar al proveedor?</p>
                    <div className="flex space-x-10 justify-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold p-2 rounded-lg text-xl" onClick={onClose}>Cancelar</button>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold p-2 rounded-lg text-xl" onClick={onConfirm}>Confirmar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
