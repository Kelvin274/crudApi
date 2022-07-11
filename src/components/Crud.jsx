import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const Crud = () => {
   const [db, setDb] = useState([]);
   const [dataToEdit, setDataToEdit] = useState(null);

   const createData = (data) => {
      data.id = db.length + 1;
      setDb([...db, data]);
   };

   const updateData = (data) => {
      let newData = db.map((el) => (el.id === data.id ? data : el));
      setDb(newData);
   };

   const deleteData = (id) => {
      let isDelete = confirm(`¿Desea eliminar el registro ${id}?`);
      if (isDelete) {
         let filterData = db.filter((el) => el.id !== id);
         setDb(filterData);
      } else {
         return;
      }
   };

   return (
      <div className="w-full h-full lg:h-screen flex flex-col lg:flex-row mt-4 sm:mt-0 space-y-4 sm:justify-evenly items-center">
         <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            className="w-full md:w-2/5"
         />
         <div className="w-4/5 lg:w-3/5 portrait:hidden md:portrait:block">
            <CrudTable
               data={db}
               setDataToEdit={setDataToEdit}
               deleteData={deleteData}
            />
         </div>
         <div className="md:portrait:hidden sm:landscape:hidden w-3/4 text-center border border-blue-600">
            <h1 className="font-bold text-2xl p-4 text-blue-700 dark:text-gray-400">
               Por favor, sitúe su dispositivo en forma horizontal.
            </h1>
         </div>
      </div>
   );
};

export default Crud;
