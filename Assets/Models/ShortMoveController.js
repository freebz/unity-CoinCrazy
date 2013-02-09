#pragma strict

var velocity : float = 8.0;		// 이동 속도
var moveDelay : float = 1.0;	// 이동까지의 지연 시간
var sustainTime : float = 3.0;	// 소멸까지의 시간

function Start () {
	// 등장부터 이동까지의 시간을 둔다.
	yield WaitForSeconds(moveDelay);
	
	// 플레이어의 존재를 확인한다.
	var player : GameObject = GameObject.FindWithTag("Player");
	if (player != null) {
		// 플레이어의 방향으로 순간적으로 가속한다.
		var direction : Vector3 = (player.transform.position - transform.position).normalized;
		rigidbody.AddForce(direction * velocity, ForceMode.VelocityChange);
	}
	
	// 소멸까지의 시간을 둔다.
	yield WaitForSeconds(sustainTime);
	
	// 시간이 끝나면 소멸
	Destroy(gameObject);
}

function Update () {

}