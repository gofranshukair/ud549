describe("AddressBook", function() {
  var addressBook;
  var contact;

  beforeEach(function() {
    addressBook = new AddressBook();
    contact = new Contact();
  });

  it("should be able to add a contact", function() {
    addressBook.addContact(contact);
    expect(addressBook.contacts[0]).toEqual(contact);

  });

 it("should be able to delete a contact", function(contact) {
    addressBook.deleteContact(contact);
    expect(addressBook.findContact()).toEqual(false);

  });

});
