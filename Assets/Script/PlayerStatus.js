#pragma strict

private var life : int = 100;	// 현재의 라이프 값
private var score : int = 0;	// 현재의 득점

// 코인 취득을 수신한다.
function CatchCoin(amount : int) {
	score += amount;
}

// 데미지를 수신한다.
function ApplyDamage(amount : int) {
	life -= amount;
	
	// 라이프가 0 이하가 되면 GenericMan을 파기한다.
	if (life <= 0) {
		Destroy(transform.parent.gameObject);
	}
}

function OnGUI() {
	// 라이프 값과 득점 표시
	var rect : Rect = Rect(0, 0, Screen.width, Screen.height);
	GUI.Label(rect, "LIFE: " + life.ToString() + " / SCORE: " + score.ToString());
}