const levicannon = extendContent(Weapon, "levicannon", {
	load: function(){
		this.region = Core.atlas.find("exotic-mod-leviathan-cannon");
	}
});
levicannon.ejectEffect = Fx.none;
levicannon.length = 12;
levicannon.width = 5.24;
levicannon.reload = 11;
levicannon.recoil = 1;
levicannon.shots = 1;
levicannon.alternate = true;
levicannon.velocityRnd = 0.05;
levicannon.bullet = Bullets.standardThoriumBig;
levicannon.shootSound = Sounds.shootBig;

const levi = extendContent(Mech, "leviathan", {
  updateAlt(player){
    this.super$updateAlt(player);
    
    if(player.timer.get(3, 120)){
			for(var i = 0; i < 2; i ++){
        wr = UnitTypes.wraith.create(player.getTeam());
        wr.set(player.x + Mathf.range(4), player.y + Mathf.range(4));
        wr.add();
      }
		}
    if(player.timer.get(4, 600)){
      rev = UnitTypes.revenant.create(player.getTeam());
      rev.set(player.x + Mathf.range(4), player.y + Mathf.range(4));
      rev.add();
		}
    if(player.timer.get(5, 1800)){
			mis = Vars.content.getByName(ContentType.unit,"exotic-mod-pfsgcm").create(player.getTeam());
      mis.set(player.x + Mathf.range(4), player.y + Mathf.range(4));
      mis.add();
		}
  }
});

levi.localisedName = "Leviathan";
levi.description = "A gigantic ship with great destructive power. A Carrier Dropship This is the testing phase for the unit creation.";
levi.flying = true;
levi.speed = 0.6;
levi.maxSpeed = 1;
levi.drag = 0.25;
levi.hitsize = 53;
levi.mass = 10;
levi.health = 15000;
levi.engineSize = 9;
levi.engineOffset = 22;
levi.engineColor = Color.valueOf("ad66d4");
levi.buildPower = 10;
levi.drillPower = 200;
levi.mineSpeed = 40;
levi.itemCapacity = 10000;
levi.weaponOffsetX = 5.24;
levi.weaponOffsetY = 12;
levi.weapon = levicannon;

const levipad = extendContent(MechPad, "leviathan-mech-pad", {});

levipad.mech = levi;