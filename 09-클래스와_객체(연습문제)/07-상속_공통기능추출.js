// 종족의 공통 특성을 갖는 클래스 

class Protoss {
  #name;
  #hp;
  #dps;

  // 모든 객체가 갖는 명사적 특성들을 멤버 변수로 정의
constructor(name, hp, dps){
  this.#name = name;
  this.#hp = hp;
  this.#dps = dps;
  console.log("[%s]체력 : %d, 공격력 : %d", this.#name,this.#hp,this.#dps);
}


get name(){
  return this.#name;
}
set name(value){
  this.#name = value;
}
get hp() {
  return this.#hp;
}
set hp(value){
  this.#hp = value;
}
get dps() {
  return this.#dps;
}
set dps(value){
  this.#dps = value;
}

// 객체가 수행해야 하는 동작들을 함수 형태로 정의
move(position){
  console.log(this.name + "가" + position + "까지 이동합니다");
}

attack(target) {
  console.log(this.name + "가" + target + "을 공격합니다 . 데미지 :"+ this.dps);
}
}

class Zealot extends Protoss {
  sword(target) {
    this.attack(target);
    console.log(">>>> 검으로 찌르기");
  }
} 

class Dragoon extends Protoss {
  fire(target) {
    this.attack(target);
    console.log(">>>> 원거리 공격");
  }
}

let z1 = new Zealot("질럿1", 300,20);
z1.move("본진");
z1.sword("본진");

let z2 = new Zealot("질럿2", 300,25);
z2.move("멀티");
z2.sword("멀티");

let d1 = new Dragoon("드라군1", 250,40);
d1.move("본진");
d1.fire("본진");

let d2 = new Dragoon("드라군2", 200,35);
d2.move("멀티 ");
d2.fire("멀티 ");
