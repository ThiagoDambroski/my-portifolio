//FrontImage
import SchemaImage from "../assets/images/food-delivery/schemaFood.png";

//user
import userClass from "../assets/images/food-delivery/User/UserClass.png";
import userController from "../assets/images/food-delivery/User/userController.png";
import userServiceImpl from "../assets/images/food-delivery/User/UserServiceImpl.png";
import userRepository from "../assets/images/food-delivery/User/User Repository.png";
//restaurant
import restaurantClass from "../assets/images/food-delivery/Restaurant/RestaurantClass.png";
import restaurantController from "../assets/images/food-delivery/Restaurant/RestaurantController.png";
import restaurantServiceImpl from "../assets/images/food-delivery/Restaurant/RestaurantServiceImpl.png";
import restaurantRepository from "../assets/images/food-delivery/Restaurant/RestaurantRepository.png";
//OrderFood
import OrderFoodClass from "../assets/images/food-delivery/OrderFood/OrderFoodClass.png";
import OrderFoodController from "../assets/images/food-delivery/OrderFood/OrderFoodController.png";
import OrderFoodServiceImpl from "../assets/images/food-delivery/OrderFood/OrderFoodServiceIMPL.png";
import OrderFoodRepository from "../assets/images/food-delivery/OrderFood/OrderFoodRepository.png";
//Order
import OrderClass from "../assets/images/food-delivery/Order/Order Class.png";
import OrderController from "../assets/images/food-delivery/Order/Order Controller.png";
import OrderServiceImpl from "../assets/images/food-delivery/Order/Order Service Impl.png";
import OrderRepository from "../assets/images/food-delivery/Order/Order Repository.png";
//Food
import FoodClass from "../assets/images/food-delivery/Food/Food Class.png";
import FoodController from "../assets/images/food-delivery/Food/Food Controller.png";
import FoodServiceImpl from "../assets/images/food-delivery/Food/Food Controller.png";
import FoodRepository from "../assets/images/food-delivery/Food/Food Repository.png";
//Delivery Boy
import DeliveryBoyClass from "../assets/images/food-delivery/Delivery Boy/Delivery Boy Class.png";
import DeliveryBoyController from "../assets/images/food-delivery/Delivery Boy/Delivery Boy Controller.png";
import DeliveryBoyServiceImpl from "../assets/images/food-delivery/Delivery Boy/Delivery Boy Service Implementation.png";
import DeliveryBoyRepository from "../assets/images/food-delivery/Delivery Boy/Delivery Boy Repository.png";
//Delivery
import DeliveryClass from "../assets/images/food-delivery/Delivery/Delivery Class.png";
import DeliveryController from "../assets/images/food-delivery/Delivery/Delivery Controller.png";
import DeliveryServiceImpl from "../assets/images/food-delivery/Delivery/Delivery Service Implementation.png";
import DeliveryRepository from "../assets/images/food-delivery/Delivery/Delivery Repository.png";
//Address
import AddressClass from "../assets/images/food-delivery/Adress/Adress Class.png";
import AddressController from "../assets/images/food-delivery/Adress/Adress Controller.png";
import AddressServiceImpl from "../assets/images/food-delivery/Adress/Adress Service Implementation.png";
import AddressRepository from "../assets/images/food-delivery/Adress/Address Repository.png";

//Icon Image
import javaIcon from "../assets/images/icon/programs icon/java.png";

const backEnd = {
  id: 1,
  title: "Food Delivery Back-End | Spring Boot",
  gitLink: "https://github.com/ThiagoDambroski/foodDeliveryProjectBackEnd",
  description:
    "This project is a Spring Boot application for a simple Food Delivery system," +
    "encompassing various components, including Users, Restaurants, Food items, Orders, Delivery," +
    "and Addresses. The system enables users to interact with these components via API endpoints," +
    "but you'll need to set up a MySQL database named 'fooddb' to begin.",
  images: [
    SchemaImage,
    userClass,
    restaurantClass,
    OrderFoodClass,
    OrderClass,
    FoodClass,
    DeliveryBoyClass,
    DeliveryClass,
    AddressClass,
  ],
  type: 1, // back end TYPE 2 : FRONT | TYPE 3: FULL STACK
  navLink: "/backEndProjectFoodDelivery",
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
          propertieName: "pwd",
          description: "Password, will be encrypted during the user's post.",
        },
        {
          type: "String",
          propertieName: "email",
          description: "The user's email address.",
        },
        {
          type: "Date",
          propertieName: "birthDate",
          description: "The user's birth date.",
        },
        {
          type: "String",
          propertieName: "code",
          description:
            "a code customized by the user to confirm their identity when receiving a request",
        },
        {
          type: "String",
          propertieName: "role",
          description:
            "Defines the user's role, can be 'admin', 'user', or 'delivery'. Used with Spring Security.",
        },
        {
          type: "List<Address>",
          propertieName: "addresses",
          description: "List of addresses associated with the user.",
        },
        {
          type: "Set<Authority>",
          propertieName: "authorities",
          description:
            "Set of authorities associated with the user, used for Spring Security.",
        },
      ],
      [
        //Restaurant
        {
          type: "Long",
          propertieName: "restaurantId ",
          description: "The unique identifier for the restaurant.",
        },
        {
          type: "String",
          propertieName: "name",
          description: "The restaurant's name.",
        },
        {
          type: "List<Food>",
          propertieName: "itens",
          description: "List of foods associated with the user.",
        },
        {
          type: "Address",
          propertieName: "address",
          description: "The restaurant's Address.",
        },
        {
          type: "User",
          propertieName: "restaurantOwner",
          description: "The user who owns or operates the restaurant.",
        },
      ],
      [
        //OrderFood
        {
          type: "Long",
          propertieName: "orderFoodId",
          description: "The unique identifier for the OrderFood.",
        },
        {
          type: "Food",
          propertieName: "food",
          description:
            "An item that will be added to the shopping cart, containing details about a food item.",
        },
        {
          type: "int",
          propertieName: "quantity",
          description:
            "The quantity of the specific food item in the shopping cart.",
        },
      ],
      [
        //Order
        {
          type: "Long",
          propertieName: "orderId",
          description: "The unique identifier for the Order.",
        },
        {
          type: "User",
          propertieName: "user",
          description: "The user who placed the order.",
        },
        {
          type: "Address",
          propertieName: "address",
          description: "The delivery address for the order.",
        },
        {
          type: "List<Long>",
          propertieName: "foodsId",
          description:
            "A list of IDs corresponding to the OrderFoods items in the order.",
        },
        {
          type: "List<OrderFood>",
          propertieName: "foods",
          description:
            "A list of ordered food items. This property is populated in the service implementation based on the foodsId property.",
        },
        {
          type: "Restaurant",
          propertieName: "restaurant",
          description: "The restaurant associated with the order.",
        },
        {
          type: "OrderStatus",
          propertieName: "status",
          description:
            "An enum indicating the order status. Possible values: PAID, IN_PROCESS, CANCELLED.",
        },
        {
          type: "double",
          propertieName: "totalValue",
          description: "The total value of the order.",
        },
      ],
      [
        //Food
        {
          type: "Long",
          propertieName: "foodId",
          description: "The unique identifier for the food item.",
        },
        {
          type: "String",
          propertieName: "name",
          description: "The name of the food item.",
        },
        {
          type: "double",
          propertieName: "price",
          description: "The price of the food item.",
        },
        {
          type: "String",
          propertieName: "description",
          description: "A description of the food item.",
        },
        {
          type: "Integer",
          propertieName: "stock",
          description: "The current stock quantity of the food item.",
        },
        {
          type: "List<Category>",
          propertieName: "category",
          description:
            "A list of category enums associated with the food item.",
        },
        {
          type: "Restaurant",
          propertieName: "restaurant",
          description: "The restaurant associated with the food item.",
        },
      ],
      [
        //DeliveryBoy
        {
          type: "Long",
          propertieName: "id",
          description: "The unique identifier for the DeliveryBoy.",
        },
        {
          type: "User",
          propertieName: "user",
          description: "The user associated with the DeliveryBoy.",
        },
        {
          type: "String",
          propertieName: "region",
          description:
            "The region where the deliveryBoy wishes to make deliveries.",
        },
        {
          type: "List<Delivery>",
          propertieName: "deliveries",
          description:
            "A list of deliveries that the delivery boy has completed.",
        },
      ],
      [
        //Delivery
        {
          type: "Long",
          propertieName: "id",
          description: "The unique identifier for the delivery.",
        },
        {
          type: "Order",
          propertieName: "order",
          description: "The order associated with the delivery.",
        },
        {
          type: "DeliveryStatus",
          propertieName: "status",
          description:
            "An enum indicating the delivery status. Possible values: DELIVERY, COOKING, IN_DELIVERY, WAITING_FOR_RESTAURANT_APPROVAL.",
        },
        {
          type: "Address",
          propertieName: "selectAddress",
          description: "The address for the Delivery.",
        },
        {
          type: "DeliveryBoy",
          propertieName: "boy",
          description: "The delivery boy associated with the delivery.",
        },
      ],
      [
        //Address
        {
          type: "Long",
          propertieName: "id",
          description: "The unique identifier for the Address.",
        },
        {
          type: "String",
          propertieName: "type",
          description:
            "The type of address, automatically filled when the address is posted. Possible values: USER or RESTAURANT.",
        },
        {
          type: "Long",
          propertieName: "typeId",
          description: "The ID of the owner associated with this address.",
        },
        {
          type: "String",
          propertieName: "state",
          description: "The state of the address.",
        },
        {
          type: "String",
          propertieName: "city",
          description: "The city of the address.",
        },
        {
          type: "String",
          propertieName: "address",
          description: "The street address.",
        },
      ],
    ],
    classes: [
      "User",
      "Restaurant",
      "OrderFood",
      "Order",
      "Food",
      "DeliveryBoy",
      "Delivery",
      "Address",
    ],
    images: [
      [
        //user
        userClass,
        userController,
        userServiceImpl,
        userRepository,
      ],
      [
        //restaurant
        restaurantClass,
        restaurantController,
        restaurantServiceImpl,
        restaurantRepository,
      ],
      [
        //Order Food
        OrderFoodClass,
        OrderFoodController,
        OrderFoodServiceImpl,
        OrderFoodRepository,
      ],
      [
        //Order
        OrderClass,
        OrderController,
        OrderServiceImpl,
        OrderRepository,
      ],
      [
        //Food
        FoodClass,
        FoodController,
        FoodServiceImpl,
        FoodRepository,
      ],
      [
        //Delivery Boy
        DeliveryBoyClass,
        DeliveryBoyController,
        DeliveryBoyServiceImpl,
        DeliveryBoyRepository,
      ],
      [
        //Delivery
        DeliveryClass,
        DeliveryController,
        DeliveryServiceImpl,
        DeliveryRepository,
      ],
      [
        //Address
        AddressClass,
        AddressController,
        AddressServiceImpl,
        AddressRepository,
      ],
    ],
    methods: [
      [
        //user
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
          method: "Get User By Name",
          URL: "/getByName/:name",
          description: "Returns a list of users based on their name",
        },
        {
          method: "Get User By Email",
          URL: "/getByEmail/:email",
          description: "Returns a user with the specified email",
        },
        {
          method: "Post User Admin",
          URL: "/post/admin",
          description: 'Post a new user with the role as "admin"',
        },
        {
          method: "Post User",
          URL: "/post/user",
          description: 'Post a new user with the role as "user"',
        },
        {
          method: "Post User Restaurant",
          URL: "/post/restaurant",
          description: 'Post a new user with the role as "restaurant"',
        },
        {
          method: "Post User Delivery",
          URL: "post/delivery",
          description: 'Post a new user with the role as "delivery"',
        },
        {
          method: "Edit User",
          URL: "/edit/:userId",
          description: "Edits a user based on their id",
        },
        {
          method: "Delete User By Id",
          URL: "/delete/:userId",
          description: "Deletes a user based on their id",
        },
        {
          method: "Add Address",
          URL: "/addAddress/:userId",
          description:
            "Add an address to the users address list (the address should be passed in the body)",
        },
        {
          method: "Edit Address",
          URL: "/editAddress/:userId/:addressId",
          description: "Edits an address based on its id",
        },
      ],
      [
        //Restaurant
        {
          method: "Get All Restaurants",
          URL: "/getAll",
          description: "Returns all restaurants",
        },
        {
          method: "Get Restaurant By Id",
          URL: "/getById/:restaurantId",
          description: "Returns a restaurant based on its id",
        },
        {
          method: "Post Restaurant",
          URL: "/post/:userId",
          description: "Post a restaurant from a user id",
        },
        {
          method: "Put Restaurant",
          URL: "/put/:restaurantId",
          description: "Edits a restaurant based on its id",
        },
        {
          method: "Delete Restaurant By Id",
          URL: "/delete/:restaurantId",
          description: "Deletes a restaurant based on its id",
        },
        {
          method: "Edit Address By Id",
          URL: "/restaurant/edit/address/:restaurantId",
          description: "Edit an address based on the restaurant id",
        },
        {
          method: "Add an Address to a Restaurant",
          URL: "/addAddress/:restaurantId",
          description: "Adds an address to a restaurant based on its ID",
        },
        {
          method: "Approve Delivery",
          URL: "/approveDelivery/:restaurantId/:deliveryId",
          description:
            "restaurant needs to approve the request to avoid" +
            "ingredient shortages or other complications. This method requires the restaurant ID followed by the delivery ID. Also set the status as COOKING",
        },
        {
          method: "Set Delivery Status as In Delivery",
          URL: "/restaurant/inDelivery/:restaurantId/:deliveryId",
          description:
            "When the delivery driver has the order," +
            "the restaurant must update the order status. This method requires the restaurant ID followed by the delivery ID",
        },
      ],
      [
        //OrderFood
        {
          method: "Get All Orders",
          URL: "/getAll",
          description: "Returns all orders",
        },
        {
          method: "Get Orders By User",
          URL: "/getByUser/:userId",
          description: "Returns all orders made by the user",
        },
        {
          method: "Post Order",
          URL: "/post/:userId/:addressId/:restaurantId",
          description:
            "To place an order, you need a list of OrderFood IDs that compose this order in " +
            "the request body. Additionally, you also need the user ID who is placing the order, followed by the address ID where the order will be delivered, and finally, " +
            "the restaurant ID from which the order is being placed",
        },
        {
          method: "Delete Order By Id",
          URL: "/delete/:orderId",
          description: "Deletes an order based on its id",
        },
        {
          method: "Paid Order By Id",
          URL: "/paidOrder/:orderId",
          description: "Changes the status of an order to PAID",
        },
      ],
      [
        //Order
        {
          method: "Get All Orders",
          URL: "/getAllFoods",
          description: "Returns all orders",
        },
        {
          method: "Get Orders By User",
          URL: "/getByUser/:userId",
          description: "Returns all orders made by the user",
        },
        {
          method: "Post Order",
          URL: "/post/:userId/:addressId/:restaurantId",
          description:
            "To place an order, you need a list of OrderFood IDs that compose this order in the request" +
            "body. Additionally, you also need the user ID who is placing the order, followed by the address ID where the order will be delivered, and finally, the restaurant ID from which " +
            "the order is being placed",
        },
        {
          method: "Delete Order By Id",
          URL: "/delete/:orderId",
          description: "Deletes an order based on its id",
        },
        {
          method: "Paid Order By Id",
          URL: "/paidOrder/:orderId",
          description: "Changes the status of an order to PAID",
        },
      ],
      [
        //Food
        {
          method: "Get All Foods",
          URL: "/getAllFoods",
          description: "Returns all foods",
        },
        {
          method: "Get Food By Id",
          URL: "/getById",
          description: "Returns a food based on its id",
        },
        {
          method: "Get Foods By Name",
          URL: "/getByName/:name",
          description: "Returns a list of foods based on their name",
        },
        {
          method: "Get Foods By Category",
          URL: "/getByCategory/:category",
          description: "Returns a list of foods based on their category",
        },
        {
          method: "Post Food",
          URL: "/post/:restaurantId",
          description: "Post a food to a restaurant",
        },
        {
          method: "Put Food",
          URL: "/put/:foodId",
          description: "Edits a food based on its id",
        },
        {
          method: "Delete Food By Id",
          URL: "/delete/:foodId",
          description: "Deletes a food based on its id",
        },
      ],
      [
        //DeliveryBoy
        {
          method: "Get All DeliveryBoys",
          URL: "/getAll",
          description: "Returns all delivery boys",
        },
        {
          method: "Get DeliveryBoy By Id",
          URL: "/getById/:boyId",
          description: "Returns a delivery boy based on their id",
        },
        {
          method: "Post DeliveryBoy",
          URL: "/post/:userId",
          description: "Post a delivery boy from a user id",
        },
        {
          method: "Delivery Order",
          URL: "/deliveryAOrder/:deliveryId/:deliveryBoyId/:code",
          description:
            "Indicates that the order has been delivered, requires the Delivery Id, " +
            "DeliveryBoy Id, and the users code",
        },
        {
          method: "Change DeliveryBoy Region",
          URL: "/changeBoyRegion/:boyId",
          description:
            "Change the delivery region for a delivery boy, the new region is passed in the request body",
        },
      ],
      [
        //Delivery

        {
          method: "Get All Deliveries",
          URL: "/getAll",
          description: "Returns all deliveries",
        },
        {
          method: "Get Delivery by Delivery Boy Region",
          URL: "/getByRegionDeliveryBoy/:boyId",
          description: "Returns deliveries based on the delivery boy region",
        },
        {
          method: "Get All Deliveries",
          URL: "/getAll",
          description: "Returns all deliveries",
        },
        {
          method: "Add DeliveryBoy to Delivery",
          URL: "/addDeliveryBoy/:deliveryId/:deliveryboyId",
          description: "Link a delivery boy to a delivery",
        },
      ],
      [
        //Address

        {
          method: "Get All Addresses",
          URL: "/getAll",
          description: "Returns all addresses",
        },
        {
          method: "Delete Address By Id",
          URL: "/deleteAddress/:AddressId",
          description: "Deletes an address based on its id",
        },
      ],
    ],
  },
};

export default backEnd;
