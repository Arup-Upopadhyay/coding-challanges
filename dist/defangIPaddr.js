function defangIPaddr(address) {
    return address.split('.').join('[.]');
}
export default defangIPaddr;
