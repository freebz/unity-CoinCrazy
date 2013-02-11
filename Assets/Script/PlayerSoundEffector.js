#pragma strict

var coinSE : AudioClip;		// 코인 획득음
var damageSE : AudioClip;	// 데미지 효과음

// 코인 획득을 수신한다.
function CatchCoin(amount : int) {
	audio.PlayOneShot(coinSE);
}

// 데미지 수신
function ApplyDamage(amount : int) {
	audio.PlayOneShot(damageSE);
}