#pragma strict

function OnTriggerEnter(other : Collider) {
	// ApplyDamage 메시지를 송신한다.
	other.gameObject.SendMessage("ApplyDamage", 10);
	// 자기 자신을 파기하고 소멸한다.
	Destroy(gameObject);
}