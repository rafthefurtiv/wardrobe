import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Platform  } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private file: File,
    public  platform: Platform
  ) {

  }


  save(){

    //this.file.checkDir(this.file.dataDirectory, 'localDir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesn\'t exist'));

		this.platform.ready().then(() =>{
			if(this.platform.is('android')) {
				this.file.checkDir(this.file.externalRootDirectory, 'localDir').then(response => {
					console.log('Directory exists'+response);
				}).catch(err => {
					console.log('Directory doesn\'t exist'+JSON.stringify(err));
					this.file.createDir(this.file.externalRootDirectory, 'localDir', false).then(response => {
						console.log('Directory create'+response);
					}).catch(err => {
						console.log('Directory no create'+JSON.stringify(err));
					}); 
				});
			}
		});
  
  
  console.log("File salvato");
  }

}
