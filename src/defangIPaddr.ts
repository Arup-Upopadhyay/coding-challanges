function defangIPaddr(address: string): string {
    return address.split('.').join('[.]');
}
export default defangIPaddr;
