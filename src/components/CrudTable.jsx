import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
   return (
      <div className="relative overflow-x-visible shadow-md sm:rounded-lg">
         <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
            <thead className="text-xs text-white uppercase bg-azulCla dark:bg-gray-700/50 dark:text-gray-400">
               <tr>
                  <th scope="col" className="px-6 py-3">
                     Nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                     D.N.I
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Acciones
                  </th>
               </tr>
            </thead>
            <tbody>
               {data.length > 0 ? (
                  data.map((el) => (
                     <CrudTableRow
                        key={el.id}
                        elm={el}
                        setDataToEdit={setDataToEdit}
                        deleteData={deleteData}
                     />
                  ))
               ) : (
                  <tr className="bg-gray-700/20 border-b border-azul dark:border-blue-700/70">
                     <td
                        colSpan="4"
                        className="text-xl font-medium text-bold text-center p-3"
                     >
                        Sin datos
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
};

export default CrudTable;
