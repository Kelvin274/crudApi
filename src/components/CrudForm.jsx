import { useEffect, useState } from "react";

const initialForm = {
   id: null,
   name: "",
   dni: "",
   mail: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
   const [form, setForm] = useState(initialForm);

   useEffect(() => {
      if (dataToEdit) {
         setForm(dataToEdit);
      } else {
         setForm(initialForm);
      }
   }, [dataToEdit]);

   const handleChange = (e) => {
      setForm({
         ...form,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!form.name || !form.dni) {
         alert("Datos incompletos");
         return;
      }

      if (form.id === null) {
         createData(form);
      } else {
         updateData(form);
      }

      handleReset();
   };

   const handleReset = (e) => {
      setForm(initialForm);
      setDataToEdit(null);
   };

   return (
      <div>
         {dataToEdit ? (
            <h1 className="my-2 text-lg md:text-2xl">EDITAR</h1>
         ) : (
            <h1 className="my-2 text-lg md:text-2xl">AGREGAR</h1>
         )}

         <form
            onSubmit={handleSubmit}
            className="grid grid-rows-3 grid-cols-3 gap-x-2 md:gap-x-4 items-center"
         >
            <div className="row-start-1 col-span-2 relative z-0 w-full mb-6 group">
               <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-azulCla peer"
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-azulCla peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Nombre
               </label>
            </div>

            <div className="row-start-2 col-span-2 relative z-0 w-full mb-6 group">
               <input
                  type="text"
                  name="dni"
                  value={form.dni}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-azulCla peer"
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="dni"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-azulCla peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  D.N.I
               </label>
            </div>

            <div className="row-start-3 col-span-2 relative z-0 w-full mb-6 group">
               <input
                  type="email"
                  name="mail"
                  value={form.mail}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-verdeCla peer"
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="mail"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeOsc peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Email
               </label>
            </div>

            <div className="col-start-3 row-span-3 flex flex-col space-y-3 m-3">
               <input
                  type="submit"
                  value="Enviar"
                  className="text-azulCla hover:text-white border border-azulMed hover:bg-azulOsc focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
               ></input>
               <input
                  type="reset"
                  value="Limpiar"
                  onClick={handleReset}
                  className="text-azulCla hover:text-gray-100 border border-azulCla hover:bg-azulOsc focus:ring-4 focus:outline-none focus:ring-verdeCla font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-emerald-500 dark:text-emerald-500 dark:hover:text-white dark:hover:bg-emerald-600 dark:focus:ring-emerald-800"
               ></input>
            </div>
         </form>
      </div>
   );
};

export default CrudForm;

/*
className="text-emerald-700 hover:text-white border border-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-emerald-500 dark:text-emerald-500 dark:hover:text-white dark:hover:bg-emerald-600 dark:focus:ring-emerald-800"
*/
