#pragma strict

var walkSpeed : float = 3.0;	// 걷는 속도
var gravity : float = 20.0;		// 중력가속도
var jumpSpeed : float = 8.0;	// 점프 초속
private var velocity : Vector3;	// 현재 속도

function Start () {
	// 보행 애니메이션을 약간 종종걸음으로 한다.
	animation["Walk"].speed = 2.0;
}

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	
	// 바닥에 닿았을 때만 하는 처리
	if (controller.isGrounded) {
		// 키 입력으로 속도를 결정한다.
		velocity = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
		velocity *= walkSpeed;
		
		if (Input.GetButtonDown("Jump")) {
			// 점프 시작. 세로 방향으로 초속을 줘 점프 재생
			velocity.y = jumpSpeed;
			animation.Play("Jump");
		} else if (velocity.magnitude > 0.5) {
			// 보행 애니메이션으로 전환하면서 진행 방향으로 선회한다.
			animation.CrossFade("Walk", 0.1);
			transform.LookAt(transform.position + velocity);
		} else {
			animation.CrossFade("Idle", 0.1);
		}
	}
	
	// 중력에 의해 아래방향으로 가속
	velocity.y -= gravity * Time.deltaTime;
	
	// 캐릭터 컨트롤러의 이동
	controller.Move(velocity * Time.deltaTime);
}