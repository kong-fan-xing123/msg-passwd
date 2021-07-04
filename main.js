class MSG {
 #msg = null
 constructor(obj) {
  this.obj = obj
  this.type = "ICRPMSG"
 }
 get msg() {
  var t = confirm("do you want script read the password?")
  if (t) {
   return this.#msg;
  } else {
   throw Error("the user rejection read the msg property")
  }
 }
 set msg(_v) {
  throw new SyntaxError("please use the cnv() func")
 }
 cnv(oldpwd, msg) {
  if (this.check(oldpwd)) { this.#msg = msg; } else { throw new Error("passwd check: not ok") }
  return this
 }
 check(pwd) {
  return pwd === this.#msg
 }
}
function send(msg) {
 throw msg
}
