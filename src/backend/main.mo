import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Order "mo:core/Order";

actor {
  type ContactForm = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    interest : Text;
    timestamp : Time.Time;
  };

  module ContactForm {
    public func compare(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      Int.compare(form1.timestamp, form2.timestamp);
    };
  };

  let forms = Map.empty<Text, ContactForm>();

  public shared ({ caller }) func submitForm(name : Text, phone : Text, email : Text, message : Text, interest : Text) : async () {
    let id = name.concat(Time.now().toText());
    let form : ContactForm = {
      name;
      phone;
      email;
      message;
      interest;
      timestamp = Time.now();
    };
    forms.add(id, form);
  };

  func getFormInternal(id : Text) : ContactForm {
    switch (forms.get(id)) {
      case (null) { Runtime.trap("Form not found") };
      case (?form) { form };
    };
  };

  public query ({ caller }) func getAllForms() : async [ContactForm] {
    forms.values().toArray().sort();
  };

  public query ({ caller }) func getFormsByInterest(interest : Text) : async [ContactForm] {
    forms.values().toArray().filter(func(form) { Text.equal(form.interest, interest) });
  };
};
