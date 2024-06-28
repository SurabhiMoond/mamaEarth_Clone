import { jsonUrls } from '../allJsonUrl/jsonUrls';
import { useFetchData } from '../customHook/useFatchData';

export const FaceNewL = () => {
  const { data } = useFetchData(jsonUrls.products);
  const cardLinkData = data.filter(
    (product) =>
      product.category === "Face" && product.sellerTag === "NEW LAUNCH"
  );
  return (
    <div>
      {cardLinkData.map((ele,id)=>
      <div key={id}>
      <img src={ele.image} alt="" />
      <p>{ele.name}</p>
      <button> Add to Cart</button>
      </div>
      )}
    </div>
  )
}
