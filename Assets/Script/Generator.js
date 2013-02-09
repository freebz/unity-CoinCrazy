#pragma strict

var intervalMin : float = 0.5;		// 생성 간격(최소값)
var intervalMax : float = 1.5;		// 생성 간격(최대값)
var coinRate : float = 0.3;			// 코인을 생성할 확률

var coinPrefab : GameObject;		// 코인의 프리팹
var spikeBallPrefab : GameObject;	// 장애물 프리팹

function Start () {
	// 이하의 처리를 무한 반복한다.
	while (true) {
		// 랜덤하게 간격을 둔다.
		yield WaitForSeconds(Random.Range(intervalMin, intervalMax));
		
		// 프리팹을 랜덤하게 선택한다.
		var prefab : GameObject = Random.value < coinRate ? coinPrefab : spikeBallPrefab;
		
		// 생성 위치를 랜덤하게 결정한다. (반경 5.5의 원주상)
		var theta : float = Random.Range(0.0, Mathf.PI * 2.0);
		var position : Vector3 = Vector3(Mathf.Cos(theta), 0.0, Mathf.Sin(theta)) * 5.5;
		position.y = 2.5;
		
		// 생성한다.
		Instantiate(prefab, position, Quaternion.identity);
	}
}

function Update () {

}