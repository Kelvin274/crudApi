import { useState, useEffect } from "react";
import { apiInstance, apiService } from "../helpers/apiInstance";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const Crud = () => {
   const [db, setDb] = useState(null);
   const [dataToEdit, setDataToEdit] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   const getUsers = async () => {
      try {
         let res = await apiService.get("/users");
         if (res.data) {
            setDb(res.data);
            setError(null);
         }
      } catch (err) {
         setDb(null);
         setError(err.response);
         throw err.response;
      }
   };

   const findId = (arr) => {
      let arrayIds = arr.map((el, ind) => el.id).sort((a, b) => a - b);
      let j = 1;
      let newId;

      for (let i = 0; i < arrayIds.length; i++) {
         if (arrayIds[i] !== j) return (newId = j);
         j++;
      }
   };

   useEffect(() => {
      setLoading(true);
      getUsers();
      setLoading(false);
   }, []);

   const createData = (data) => {
      data.id = findId(db);
      apiInstance
         .post("/users", data)
         .then((res) => {
            if (res.data) {
               setDb([...db, res.data]);
            } else {
               setError(res.response);
            }
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const updateData = (data) => {
      let endpoint = `/users/${data.id}`;
      apiInstance.put(endpoint, data).then((res) => {
         if (res.data) {
            let newData = db.map((el) => (el.id === data.id ? data : el));
            setDb(newData);
         } else {
            setError(res.response);
         }
         console.log(res);
      });
   };

   const deleteData = (id) => {
      let isDelete = confirm(`¿Desea eliminar el registro ${id}?`);
      if (isDelete) {
         let endpoint = `/users/${id}`;
         apiInstance.delete(endpoint).then((res) => {
            if (res.data) {
               let filterData = db.filter((el) => el.id !== id);
               setDb(filterData);
            } else {
               setError(res);
            }
            console.log(res);
         });
      } else {
         return;
      }
   };

   return (
      <div className="w-full min-h-screen lg:h-screen flex flex-col lg:flex-row sm:mt-0 space-y-4 justify-evenly items-center">
         <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            className="w-full md:w-2/5"
         />

         {loading && <Loader />}
         {error ? (
            <Message msg={error.statusText} number={error.status} />
         ) : (
            db && (
               <CrudTable
                  data={db}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
                  className="w-4/5 lg:w-3/5 portrait:hidden md:portrait:block"
               />
            )
         )}

         <div className="md:portrait:hidden sm:landscape:hidden w-3/4 text-center border border-blue-600">
            <h1 className="font-bold text-2xl p-4 text-azul dark:text-gray-400">
               Por favor, sitúe su dispositivo en forma horizontal.
            </h1>
         </div>
      </div>
   );
};

export default Crud;
