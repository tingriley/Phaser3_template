menu.preload = function ()
{

      
},

menu.create = function ()
{

   
    var background = this.physics.add.image(
    worldX/2, // x position
    worldY/2, // y position
    'background', // key of image for the sprite
  );

    var startText = this.add.text(
    this.physics.world.bounds.width / 2,
    this.physics.world.bounds.height / 2,
    'Press SPACE to Start',
    {
      fontFamily: 'Monaco, Courier, monospace',
      fontSize: '30px',
      fill: '#fff',
    },
  );
    startText.setOrigin(0.5);

    

      
  this.input.keyboard.on('keydown', function (event) {

       if(32 == event.keyCode){
           menu.scene.start('level1');
       }

    });
},

menu.update = function ()
{
    
    
}
