
import { RootRouter } from "./routers";


function App() {
  // const [title, setTitle] = useState<IPost[]>([]);
  
  // const handleGetPost = async () => {
  //   const result = await mycustomAxios.get<IPost[]>("posts");
  //   setTitle(result.data);
  // };
  // useEffect(() => {
  //   handleGetPost();
  // }, []);

  return <RootRouter />;
}

export default App;
