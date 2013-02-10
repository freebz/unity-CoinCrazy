#pragma strict

private var effectFlag : boolean;	// 연출 플래그
private var originalColor : Color;	// 재질의 원래 색

function Start () {
	// 재질의 원래 색을 보존해 둔다.
	originalColor = renderer.material.color;
}

function Update () {
	if (effectFlag) {
		// 재질을 붉게 점멸시킨다.
		renderer.material.color = Color.red * Mathf.Abs(Mathf.Sin(40.0 * Time.time));
	}
}

function ApplyDamage(amount : int) {
	// 연출을 온
	effectFlag = true;
	// 0.3초간 연출을 계속한다.
	yield WaitForSeconds(0.3);
	// 연출을 오프로 하고 재질 색을 원래 색으로 되돌린다.
	effectFlag = false;
	renderer.material.color = originalColor;
}