import ErrorImg from "./utils/errorPageIMG1.jpeg"

const ErrorPage = ()=>
{
    return(
        <div className="p-2 mx-auto my-4 max-w-2xl flex flex-wrap items-center justify-center flex-col rounded-xl  shadow-xl bg-gray-300 border-solid border-4 border-white">
            
            <h1 className="font-bold py-1 text-lg">Some Error going on  </h1>
            
            <img  className="my-4 max-h-[30rem] w-26 object-cover overflow-hidden rounded-xl" src={ErrorImg } /> 
            
        </div>
    )
}


// explore the hoot for error page
export default ErrorPage;