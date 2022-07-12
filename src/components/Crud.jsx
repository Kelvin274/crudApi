import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const Crud = () => {
   const [db, setDb] = useState(null);
   const [dataToEdit, setDataToEdit] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   let api = helpHttp();
   let url = "http://localhost:5000/users";

   useEffect(() => {
      setLoading(true);
      api.get(url).then((res) => {
         if (!res.err) {
            setDb(res);
            setError(null);
         } else {
            setDb(null);
            setError(res);
         }
      });
      setLoading(false);
   }, []);

   const createData = (data) => {
      data.id = db.length + 1;
      // Solo para Json-server, cada API necesita sus options.
      let options = {
         body: data,
         headers: { "content-type": "application/json" },
      };

      api.post(url, options).then((res) => {
         console.log(res);

         if (!res.err) {
            setDb([...db, res]);
         } else {
            setError(res);
         }
      });
   };

   const updateData = (data) => {
      // Solo para Json-server, cada API necesita sus options.
      let options = {
         body: data,
         headers: { "content-type": "application/json" },
      };
      let endpoint = `${url}/${data.id}`;

      api.put(endpoint, options).then((res) => {
         if (!res.err) {
            let newData = db.map((el) => (el.id === data.id ? data : el));
            setDb(newData);
         } else {
            setError(res);
         }
      });
   };

   const deleteData = (id) => {
      let isDelete = confirm(`¿Desea eliminar el registro ${id}?`);
      if (isDelete) {
         let endpoint = `${url}/${id}`;
         let options = {
            headers: { "content-type": "application/json" },
         };

         api.del(endpoint, options).then((res) => {
            if (!res.err) {
               let filterData = db.filter((el) => el.id !== id);
               setDb(filterData);
            } else {
               setError(res);
            }
         });
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
         {loading && <Loader />}
         {error && <Message />}
         <div className="w-4/5 lg:w-3/5 portrait:hidden md:portrait:block">
            {db && (
               <CrudTable
                  data={db}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
               />
            )}
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
