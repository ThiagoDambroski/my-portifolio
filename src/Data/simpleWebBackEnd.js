//SchemaImage
import schemaImage from "../assets/images/web-store-project/schemaSimpleWeb.png";
//User
import userClass from "../assets/images/web-store-project/User/UserClass.png";
import userController from "../assets/images/web-store-project/User/UserController.png";
import userServiceImpl from "../assets/images/web-store-project/User/UserServiceImpl.png";
import userRepository from "../assets/images/web-store-project/User/UserRepository.png";
//Item
import itemClass from "../assets/images/web-store-project/Item/ItemClass.png";
import itemController from "../assets/images/web-store-project/Item/ItemController.png";
import itemServiceImpl from "../assets/images/web-store-project/Item/ItemServiceImpl.png";
import itemRepository from "../assets/images/web-store-project/Item/ItemRepository.png";
//Category
import categoryClass from "../assets/images/web-store-project/Category/CategoryClass.png";
import categoryController from "../assets/images/web-store-project/Category/CategoryController.png";
import categoryServiceImpl from "../assets/images/web-store-project/Category/CategoryServiceImpl.png";
import categoryRepository from "../assets/images/web-store-project/Category/CategoryClass.png";
//Order Item
import OrderItemClass from "../assets/images/web-store-project/OrderItem/OrderItemClass.png";
import OrderItemController from "../assets/images/web-store-project/OrderItem/OrderItemController.png";
import OrderItemServiceImpl from "../assets/images/web-store-project/OrderItem/OrderItemServiceImpl.png";
import OrderItemRepository from "../assets/images/web-store-project/OrderItem/OrderItemRepository.png";
//Order
import OrderClass from "../assets/images/web-store-project/Order/OrderClass.png";
import OrderController from "../assets/images/web-store-project/Order/OrderController.png";
import OrderServiceImpl from "../assets/images/web-store-project/Order/OrderServiceImpl.png";
import OrderRepository from "../assets/images/web-store-project/Order/OrderRepository.png";

//Icon Image
import javaIcon from "../assets/images/icon/programs icon/java.png";

const simpleWebBackEnd = {
  id: 3,
  title: "Simple Web Store Back-End | Spring Boot",
  gitLink: "https://github.com/ThiagoDambroski/Simple-Web-Store-Spring-Boot",
  description:
    "This portfolio offers a comprehensive insight into the components and functionality of" +
    "the Spring Boot web store application. Each section meticulously outlines the endpoints, properties," +
    "methods, and pertinent service implementations for every component. To begin, make sure to configure a " +
    "MySQL database named 'web_application.'",
  images: [
    schemaImage,
    userClass,
    itemClass,
    categoryClass,
    OrderItemClass,
    OrderClass,
  ],
  type: 1, // back end TYPE 2 : FRONT | TYPE 3: FULL STACK
  navLink: "/backEndProjectWebStore",
  iconImage: javaIcon,
  informationPage: {
    properties: [
      [
        //User

        {
          type: "Long",
          propertieName: "userId",
          description: "The unique identifier for the user.",
        },
        {
          type: "String",
          propertieName: "name",
          description: "The user's name.",
        },
        {
          type: "String",
          propertieName: "email",
          description: "The user's email address.",
        },
        {
          type: "List<Item>",
          propertieName: "whishList",
          description: "List of Items that the user wishes to purchase later",
        },
      ],
      [
        //Item
        {
          type: "Long",
          propertieName: "itemId",
          description: "The unique identifier for the item.",
        },
        {
          type: "String",
          propertieName: "name",
          description: "The item's name.",
        },
        {
          type: "double",
          propertieName: "price",
          description: "The item price.",
        },
        {
          type: "int",
          propertieName: "stock",
          description:
            "The current quantity of the item available in the inventory.",
        },
        {
          type: "List<Category>",
          propertieName: "category",
          description: "List of categorys associated with the item.",
        },
        {
          type: "List<User>",
          propertieName: "user",
          description: "List of users that put the item on the wishlist.",
        },
      ],
      [
        //Category
        {
          type: "Long",
          propertieName: "categoryId",
          description: "The unique identifier for the category.",
        },
        {
          type: "String",
          propertieName: "name",
          description: "The category's name.",
        },
        {
          type: "List<Item>",
          propertieName: "itens",
          description: "List of items associated with the category.",
        },
      ],
      [
        //Order Item
        {
          type: "Long",
          propertieName: "orderItemId",
          description: "The unique identifier for the Order Item.",
        },
        {
          type: "Item",
          propertieName: "item",
          description: "Represents an item within a shopping cart",
        },
        {
          type: "int",
          propertieName: "quantity",
          description:
            "The number of units of the corresponding item in the shopping cart.",
        },
      ],
      [
        //Order
        {
          type: "Long",
          propertieName: "orderId",
          description: "The unique identifier for the order.",
        },
        {
          type: "User",
          propertieName: "user",
          description: "The user associated with the ordery.",
        },
        {
          type: "List<Long>",
          propertieName: "itensId",
          description: "List of OrderItem IDs associated with the order.",
        },
        {
          type: "Set<OrderItem>",
          propertieName: "itens",
          description: "Set of OrderItem associated with the order.",
        },
        {
          type: "OrderStatus",
          propertieName: "status",
          description:
            "An enum indicating the order status. Possible values: PROCESSING, PAID, CANCELLED.",
        },
      ],
    ],
    classes: ["User", "Item", "Category", "Order Item", "Order"],
    images: [
      [
        //user
        userClass,
        userController,
        userServiceImpl,
        userRepository,
      ],
      [
        //item
        itemClass,
        itemController,
        itemServiceImpl,
        itemRepository,
      ],
      [
        //Category
        categoryClass,
        categoryController,
        categoryServiceImpl,
        categoryRepository,
      ],
      [
        //Order Item
        OrderItemClass,
        OrderItemController,
        OrderItemServiceImpl,
        OrderItemRepository,
      ],
      [
        //Order
        OrderClass,
        OrderController,
        OrderServiceImpl,
        OrderRepository,
      ],
    ],
    methods: [
      [
        //User
        {
          method: "Get All Users",
          URL: "/getAll",
          description: "Returns all users",
        },
        {
          method: "Get User By Id",
          URL: "/getById/:userId",
          description: "Returns a user based on their id",
        },
        {
          method: "Get User By Email",
          URL: "/getByEmail/:email",
          description: "Returns a user with the specified email",
        },
        { method: "Post User", URL: "/post", description: "Post a new user" },
        {
          method: "Put User",
          URL: "/put/:userId",
          description: "Edits a user based on their id",
        },
        {
          method: "Delete User By Id",
          URL: "/delete/:userId",
          description: "Deletes a user based on their id",
        },
        {
          method: "Add Item To User Wish List",
          URL: "/addItemToWishList/user/:userId/item/:itemId",
          description:
            "Adds an item to a user wishlist based on their id and the item id",
        },
        {
          method: "Remove Item From User Wishlist",
          URL: "/removeItemFromWishlist/user/:userId/item/:itemId",
          description:
            "Removes an item from a user wishlist based on their id and the item id",
        },
      ],
      [
        //Item
        {
          method: "Get All Items",
          URL: "/getAll",
          description: "Returns all items",
        },
        {
          method: "Get Item By Id",
          URL: "/getById/:itemId",
          description: "Returns a item based on their id",
        },
        {
          method: "Get Item By Name",
          URL: "/getByName/:name",
          description: "Returns a list of items based on their name",
        },
        {
          method: "Filter Item By Price",
          URL: "/filter/priceLimit/:priceLimit",
          description: "Returns a list of items based on a price limit",
        },
        { method: "Post Item", URL: "/post", description: "Post an item" },
        {
          method: "Delete Item By Id",
          URL: "/delete/:itemId",
          description: "Deletes a item based on their id",
        },
        {
          method: "Put Item",
          URL: "/put/:itemId",
          description: "Edits a item based on their id",
        },
        {
          method: "Give item a discount",
          URL: "/giveDiscount/:itemId/:discountPercentage",
          description:
            "Apply a discount to a specific item based on its ID and a discount percentage (an integer value).",
        },
        {
          method: "Add a Category to an Item",
          URL: "/addCategory/:itemId/:categoryId",
          description: "Adds a category to an item based on their ID",
        },
        {
          method: "Remove a Category from an Item",
          URL: "/removeCategory/:itemId/:categoryId",
          description: "Removes a category from an item based on its ID",
        },
      ],
      [
        //Category
        {
          method: "Get All Categories",
          URL: "/getAll",
          description: "Returns all categories",
        },
        {
          method: "Get Category By Id",
          URL: "/getCategoryById/:categoryId",
          description: "Returns a category based on its ID",
        },
        {
          method: "Get Category By Name",
          URL: "/getByName/:name",
          description: "Returns a list of category based on their name",
        },
        {
          method: "Post Category",
          URL: "/post",
          description: "Post an Category",
        },
        {
          method: "Delete Category By Id",
          URL: "/delete/:categoryId",
          description: "Deletes a category based on their id",
        },
        {
          method: "Put Category",
          URL: "/put/:categoryId",
          description: "Edits a category based on their id",
        },
      ],
      [
        //Order Item
        {
          method: "Get All Order Item",
          URL: "/getAll",
          description: "Returns all order Item",
        },
        {
          method: "Post Order Item",
          URL: "/post/:itemId",
          description:
            "Posts an OrderItem, requires an item id in the path variable and quantity in the request body",
        },
        {
          method: "Delete Order Item By Id",
          URL: "/deleteById/:orderItemId",
          description: "Deletes a order item based on their id",
        },
        {
          method: "Change the item quantity on the Order Item",
          URL: "/changeQuantity/:orderItemId",
          description:
            "Changes the quantity property of an orderItem, received through a requestBody",
        },
      ],
      [
        //Order
        {
          method: "Get All Order",
          URL: "/getAll",
          description: "Returns all orders",
        },
        {
          method: "Post Order",
          URL: "/post/:userId",
          description:
            "Posting an Order requires a user ID. During the post, it removes the items from the stock and sets the order status to processing",
        },
        {
          method: "Cancel Order By Id",
          URL: "/cancelOrder/:orderId",
          description:
            "Sets the status of an Order to CANCELLED, returning the items to the stock. Performs this operation based on its ID",
        },
        {
          method: "Paid Order By Id",
          URL: "/paidOrder/:orderId",
          description:
            "Changes the status of an Order to PAID. If the order has a CANCELLED status, a custom exception will be generated",
        },
      ],
    ],
  },
};

export default simpleWebBackEnd;
