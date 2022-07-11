const CrudTableRow = ({ elm, setDataToEdit, deleteData }) => {
   const { id, name, dni, mail } = elm;
   return (
      <tr className="bg-gray-700/20 border-b dark:border-blue-700/70">
         <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
         >
            {name}
         </th>
         <td className="px-6 py-4">{dni}</td>
         <td className="px-6 py-4">{mail}</td>
         <td className="px-6 py-4 flex flex-col md:flex-row justify-evenly">
            <button
               onClick={() => setDataToEdit(elm)}
               className="m-1 md:mx-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
               Editar
            </button>
            <button
               onClick={() => deleteData(id)}
               className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
               Eliminar
            </button>
         </td>
      </tr>
   );
};

export default CrudTableRow;
