import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Text "mo:core/Text";

actor {
  type MenuItem = {
    name : Text;
    description : Text;
    price : Text;
    category : Text;
    emoji : Text;
  };

  module MenuItem {
    public func compare(item1 : MenuItem, item2 : MenuItem) : Order.Order {
      Text.compare(item1.name, item2.name);
    };
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let menuItems = Map.empty<Text, MenuItem>();
  let contactMessages = Map.empty<Nat, ContactMessage>();
  var nextMessageId = 0;

  // Seed menu items
  menuItems.add(
    "coffee",
    {
      name = "Coffee";
      description = "Freshly brewed coffee";
      price = "150";
      category = "drinks";
      emoji = "☕";
    },
  );
  menuItems.add(
    "croissant",
    {
      name = "Croissant";
      description = "Buttery French pastry";
      price = "250";
      category = "food";
      emoji = "🥐";
    },
  );
  menuItems.add(
    "cake",
    {
      name = "Cake";
      description = "Homemade cakes";
      price = "350";
      category = "desserts";
      emoji = "🍰";
    },
  );

  public query ({ caller }) func getAllMenuItems() : async [MenuItem] {
    menuItems.values().toArray().sort();
  };

  public query ({ caller }) func getMenuItemsByCategory(category : Text) : async [MenuItem] {
    menuItems.values().filter(func(item) { item.category == category }).toArray().sort();
  };

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async () {
    let newMessage : ContactMessage = {
      name;
      email;
      message;
      timestamp = Time.now();
    };

    contactMessages.add(nextMessageId, newMessage);
    nextMessageId += 1;
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    contactMessages.values().toArray();
  };
};
