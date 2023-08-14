import MenuItem from "../components/MenuItem";
import {MenuList} from "../helpers/MenuList";

const Menu = () => {
  return (
    <main className="px-0 sm:px-20 xl:px-40 py-20 grid m-auto sm:m-0 lg:grid-cols-3 sm:grid-cols-2 ">
      {MenuList.map((item, key) => {
        return (
          <MenuItem
            imageUrl={item.image}
            title={item.name}
            price={item.price}
            key={key}
          />
        );
      })}
    </main>
  );
};

export default Menu;
