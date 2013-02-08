#pragma strict

function Start () {
	animation["Walk"].speed = 4.0;
	animation.Play("Walk");
	yield WaitForSeconds(4.0);
	animation.CrossFade("Crouch", 0.1);
	yield WaitForSeconds(4.0);
	animation.CrossFade("Idle", 0.1);
}

function Update () {

}