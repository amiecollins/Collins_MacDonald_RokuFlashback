export default function (query, max_rating, total) {
    const REQ = XMLHttpRequest();
    const response;
    REQ.onload = function () {
       response = this.responseText;
    };
    REQ.open("POST", "../../php/get.php");
    REQ.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    REQ.send("query=" + query + "&max_rating=" + max_rating + "&total=" + total);
}