// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Home from './pages/Home';
// import MovieDetail from './pages/MovieDetail';
// import Watchlist from './pages/Watchlist';


// function App() {
//   return (<>

// <nav className="bg-gray-900 p-4 text-black flex gap-6 justify-center md:justify-start">
//     <Link to="/" className="hover:underline hover:text-blue-400 transition text-xl">
//       Home
//     </Link>
//     <Link to="/watchlist" className="hover:underline hover:text-blue-400 transition text-xl">
//       Watchlist
//     </Link>
//   </nav>
// ;

// < RouterProvider router={router} />;
// </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Home />,
//   },
//   {
//     path:"/movie/:id",
//     element:<MovieDetail />
//   },
//   {
//     path:"/watchlist",
//     element:<Watchlist />
//   }
// ]);



// export default App;
export default function App() {
  return (
    <div className="text-4xl text-red-600 font-bold text-center mt-10">
      If this is red, Tailwind works!
    </div>
  );
}
