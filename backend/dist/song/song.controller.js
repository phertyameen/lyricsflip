"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const song_service_1 = require("./providers/song.service");
let SongController = class SongController {
    constructor(songService) {
        this.songService = songService;
    }
    getSongs() {
        return this.songService.getSongs();
    }
    addSong() {
        return this.songService.addSong();
    }
    updateSong() {
        return this.songService.updateSong();
    }
    deleteSong() {
        return this.songService.deleteSong();
    }
};
exports.SongController = SongController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all songs' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of songs retrieved' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SongController.prototype, "getSongs", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add a new song' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Song successfully added' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SongController.prototype, "addSong", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a song' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the song to be updated' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Song successfully updated' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Song not found' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SongController.prototype, "updateSong", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a song' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the song to be deleted' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Song successfully deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Song not found' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SongController.prototype, "deleteSong", null);
exports.SongController = SongController = __decorate([
    (0, swagger_1.ApiTags)('song'),
    (0, common_1.Controller)('song'),
    __metadata("design:paramtypes", [song_service_1.SongService])
], SongController);
//# sourceMappingURL=song.controller.js.map