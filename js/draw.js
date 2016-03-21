var map = {}, i;

map.container = document.querySelector("#map");

map.bg = document.createElement("canvas");
map.bg.setAttribute("width", "800");
map.bg.setAttribute("height", "430");
map.bg.style.backgroundColor = 'skyblue';

map.bgContext = map.bg.getContext("2d");
map.bgContext.lineCap = "round";
map.bgContext.lineWidth = 3;
map.bgContext.strokeStyle = 'rgba(0,100,200,0.3)';

map.bgContext.fillStyle = 'floralwhite';

map.world = new Path2D("M346.725,131.376l-3.377,4.501l-2.25,2.251l-4.501,2.475l-0.676,2.026c0,0-1.801,1.801-1.575,2.927   s0.226,3.151,0.226,3.151s-3.151,2.926-4.502,3.826c-1.351,0.9-3.152,2.926-3.152,2.926s-1.125,1.351-1.8,1.801   c-0.675,0.449-1.8,1.8-2.701,3.151c-0.901,1.351-1.801,2.25-2.251,2.925c-0.45,0.675-1.801,2.251-2.476,4.727   c-0.675,2.477-2.476,5.402-2.476,5.402l-0.451,1.125c0.226,3.827,0.225,4.502,0.676,5.853c0.45,1.35,0.901,0.899,0.45,3.826   c-0.45,2.925-0.45,4.051-0.9,5.402c-0.45,1.349-1.801,3.825-2.25,4.952c-0.451,1.125,0.9,3.15,0.9,3.15s0.676,2.927,0.225,3.602   c-0.45,0.676,0.225,2.026,0.225,2.026s2.701,1.575,3.602,2.476c0.9,0.9,2.476,2.251,2.701,2.926   c0.226,0.676,2.026,3.827,2.251,4.502s2.026,3.15,2.476,3.826c0.45,0.676,2.701,3.152,2.701,3.152s2.926,2.249,3.602,3.15   c0.675,0.9,2.701,1.35,3.375,2.025c0.676,0.675,2.251,0.449,3.151,1.126c0.901,0.675,2.701-0.451,3.602,0   c0.9,0.45,3.377-0.45,4.052-0.9c0.675-0.45,2.25-2.025,3.376-1.351c1.125,0.674,1.8,0,2.701,0.225   c0.899,0.225,2.25-0.899,3.15-0.899c0.901,0,3.151-0.901,3.826-0.901c0.676,0,2.927-1.352,3.828-1.352   c0.899,0,2.025-0.898,3.15-0.449c1.125,0.449,0.675-0.899,2.701-0.225c2.026,0.674,2.701,0,3.376,0.674   c0.676,0.676,1.577,0.002,2.252,0.902c0.675,0.899,1.8,1.574,2.025,2.475c0.224,0.901,1.575,1.802,1.575,1.802l1.351,0.224   c0,0,1.802-1.35,2.251-0.449c0.45,0.9,2.476,0.676,2.476,0.676l2.025,2.25l0.676,0.9c0,0,1.351,3.602,1.125,4.952   c-0.225,1.35-0.225,4.276-0.9,4.951c-0.675,0.676-1.125,3.602-1.125,3.602s-0.901,0.9,1.125,2.701   c2.026,1.802,3.377,3.376,4.052,4.275c0.676,0.901,2.477,3.378,2.7,4.953c0.226,1.575,0.676,2.475,1.577,4.501   c0.9,2.026,2.025,2.251,2.25,4.503c0.226,2.25,0.675,2.251,0.45,3.825c-0.225,1.576-0.9,1.801-0.225,2.926   c0.675,1.126,1.574,3.152,1.351,3.827c-0.225,0.675-0.676,3.601-0.676,3.601l-0.45,1.351l-2.025,3.828l-1.351,2.024   c-0.45,1.575-1.35,3.151-1.125,5.402c0.224,2.251-1.125,2.25,0.675,4.5c1.801,2.252,2.7,4.728,3.826,6.754   c1.126,2.025,1.801,4.051,2.025,5.401c0.226,1.351,1.126,1.802,1.576,3.602c0.449,1.801,0.675,2.7,0.675,3.826   c0,1.125-0.226,4.052,0.226,4.727c0.449,0.675,0.675,2.702,0.9,3.602c0.225,0.901-0.676,1.126,0.675,2.702   c1.351,1.575,2.251,2.475,3.151,3.601s0.675,0.675,1.351,2.251c0.675,1.575,1.575,2.477,1.801,3.826   c0.225,1.35,0.449,4.726,1.125,6.302c0.675,1.576,1.575,3.152,1.575,3.152s2.477,1.575,3.377,1.35   c0.899-0.225,2.701-2.249,4.052-1.575c1.351,0.675,2.476,0,3.601,0s2.251-1.351,3.377-1.351c1.125,0,2.7-1.801,3.602-1.35   c0.9,0.449,2.024-0.452,3.15-1.577c1.126-1.124,1.801-2.024,3.826-3.825c2.026-1.801,1.801-1.802,3.151-2.927   c1.351-1.126,2.702-3.602,4.277-4.052s2.025-2.024,2.475-3.15c0.451-1.126,0.675-1.801,1.351-2.702   c0.676-0.899,0.225,0.228,1.351-2.7c1.126-2.927,2.478-4.051,3.603-4.727c1.125-0.675,1.8-2.025,2.475-2.251   s1.801,0.675,1.351-1.351c-0.449-2.025,0-4.951-0.449-5.626c-0.451-0.677-1.127,1.574-0.901-1.803   c0.227-3.375,2.701-6.752,2.701-6.752s3.376-4.276,4.502-4.951s1.35-1.35,2.927-2.251c1.574-0.899,4.951-3.15,4.951-4.276   s1.351-4.052,1.351-4.728c0-0.675,0-1.35-0.449-5.177c-0.451-3.825,0.449-2.926-0.901-6.527c-1.35-3.601-1.577-8.103-2.476-9.228   c-0.901-1.126-0.451-4.053-0.451-4.952c0-0.9,1.577-3.151,2.252-4.051c0.675-0.901,3.601-4.503,3.601-4.503   s4.501-5.176,6.077-7.651c1.576-2.477,3.151-4.727,4.276-5.627c1.126-0.9,3.827-2.928,5.402-5.178   c1.576-2.25,4.727-6.526,4.953-7.203c0.224-0.674,2.024-2.925,2.024-2.925s2.476-2.927,2.927-4.502   c0.449-1.576,2.699-10.354,2.249-9.904c-0.448,0.451-3.15,0.9-4.051,1.125c-0.899,0.226,1.352,1.125-5.177,0.676   c-6.526-0.451-9.902,0.675-9.902,0.675c-2.027-0.451-3.602,1.8-4.278-1.351c-0.675-3.15-1.126-4.951-2.475-7.202   c-1.351-2.251-2.252-3.151-4.276-6.078c-2.025-2.925-1.802-1.576-3.603-3.825c-1.8-2.251-2.251-1.577-3.376-4.502   c-1.125-2.926-2.025-1.8-3.376-5.852c-1.351-4.053-2.251-4.503-2.926-6.753c-0.676-2.25-1.575-2.927-2.026-4.952   c-0.45-2.026-5.626-12.379-6.302-13.055c-0.676-0.674-1.801-4.277-1.576-3.601c0.226,0.675,3.377,2.926,3.377,2.926   s1.8-0.676,2.476-0.676c0.675,0,3.376,2.477,3.376,3.376c0,0.901,4.729,5.178,5.853,8.329c1.125,3.151,2.478,5.402,2.701,6.302   s2.476,4.502,3.377,5.853c0.899,1.351,3.825,4.051,4.275,5.402s4.728,5.852,4.728,8.778c0,2.926,2.024,6.752,2.25,7.652   s4.276,2.027,4.276,2.027l5.403-1.351c0,0,8.102-5.178,9.003-5.178c0.899,0,8.104-3.376,8.104-3.376s2.925-2.7,4.95-4.275   c2.026-1.576,4.277-4.501,4.728-5.853c0.449-1.351,1.35-1.575,3.15-3.602c1.801-2.026,4.277-4.051,2.702-5.402   c-1.576-1.35-2.477-0.9-4.727-3.151c-2.251-2.25-2.026-1.8-3.602-4.727c-1.576-2.925,0.225-6.302-3.152-2.925   c-3.375,3.376-2.025,4.276-5.402,4.953c-3.375,0.674-4.727,2.925-6.302,0.674s-3.15-0.9-4.052-4.277   c-0.9-3.376-1.576-3.602-1.8-4.951c-0.224-1.351,0-1.351-1.801-4.728c-1.8-3.376-0.45-8.553,0.675-5.627   c1.126,2.926,2.926,3.376,5.853,5.402c2.925,2.025,4.277,3.602,6.977,3.827c2.701,0.224,4.952,0,5.402,0.449   c0.45,0.451,0.9-0.224,2.026,0.225c1.126,0.451,1.574-0.674,2.025,1.125c0.45,1.801,2.926,2.026,4.051,3.151   c1.126,1.125,1.126,0.676,4.053,1.125c2.927,0.451,6.979,0.451,6.979,0.451l4.275-0.226l4.952,0.449c0,0,3.603,2.026,4.502,2.026   c0.9,0,1.125,2.477,3.376,3.827c2.251,1.351,2.701,1.575,4.051,3.151c1.353,1.576,1.126,2.251,2.926,3.826   c1.802,1.577,4.729-0.224,5.179-0.898c0.448-0.676,2.699-1.801,2.251,0c-0.451,1.8,2.249,1.124,1.574,5.402   c-0.675,4.275-1.126,3.15,0,6.077c1.125,2.926,6.077,11.929,6.303,14.63c0.226,2.701,1.575,1.801,1.8,4.278   c0.226,2.475,1.575,3.375,1.575,5.176s1.577,2.25,1.801,3.602c0.227,1.351,2.702,0.224,3.377,0   c0.676-0.226,3.826-3.152,3.826-3.152s1.353-0.449,1.126-2.701c-0.226-2.249,0-1.8,0-5.176s-1.35-3.376-0.675-6.751   c0.675-3.376,2.475-5.403,2.926-6.978c0.45-1.575,2.251-4.276,3.15-4.502c0.9-0.225,5.853-2.7,6.979-4.277   c1.125-1.575,2.926-3.376,4.727-5.176c1.8-1.8,4.951-4.051,5.627-3.376c0.675,0.675,0.45,0.45,1.576,0.45   c1.125,0,3.151,0.901,4.726,1.126c1.576,0.225,4.728,4.051,5.403,6.077c0.675,2.026,0.225,1.575,2.701,4.502   c2.476,2.925,4.727,1.124,4.727,4.726s0,3.376,1.126,4.727c1.125,1.351,2.475-2.476,3.825-2.025s1.575-0.45,2.7,3.151   c1.125,3.602,1.8,3.602,2.027,7.203c0.224,3.601-0.226,0.225-0.226,3.15c0,2.927-0.226,3.152,0.226,5.852   c0.449,2.703,2.023,3.603,1.8,4.053c0,0,1.35-3.826,0.899-6.528c-0.448-2.7,0-6.526,1.126-7.651   c1.125-1.127,2.252-2.251,3.151,0.675c0.901,2.925,1.351,0.675,3.376,4.051c2.027,3.377,3.827,2.7,4.052,4.276   s1.353,1.802,2.926,3.151c1.576,1.351,2.926-0.224,4.727-1.575c1.802-1.351,6.752-6.303,6.979-8.329   c0.224-2.025,2.25-1.576-1.352-6.751c-3.602-5.177-3.602-6.978-7.428-10.129c-3.824-3.151-6.076-3.376-3.149-7.428   c2.926-4.052,4.277-6.752,6.077-5.626c1.801,1.125,4.95,0.899,4.95,5.402c0,4.501-0.9,9.453,2.251,4.051s4.728-8.553,3.826-7.651   c-0.899,0.9,2.026-1.801,2.026-1.801s0.226-2.026,4.053-2.926c3.825-0.902,4.95-1.351,6.302-2.026   c1.35-0.676,5.177-5.178,5.852-7.203c0.675-2.026,2.476-5.627,2.026-7.202c-0.45-1.577-2.702-9.228-3.152-9.004   c-0.449,0.226-0.224,0.226-3.149-2.925c-2.928-3.151-4.953-5.402-5.403-6.753c-0.45-1.351-1.576-1.576-0.226-3.376   c1.352-1.8,2.027-1.575,2.252-3.151c0.224-1.575,2.024-2.926-1.352-1.8c-3.375,1.125-0.9,0.451-3.826,0.226   c-2.926-0.226-10.578,1.575-6.751-3.151c3.825-4.727,4.949-7.652,5.625-7.652c0.677,0,4.053-3.827,4.277-0.226   c0.226,3.601,1.575,2.7,1.801,4.951s4.727-2.475,4.727-2.475s1.575,0.45,2.7,1.575c1.126,1.125,1.126,4.727,1.126,4.727   s-0.9-1.126,1.576,0.675c2.477,1.802,5.176,0.9,5.176,4.727c0,3.826,0,4.052,1.576,4.952c1.577,0.9,3.15,0.451,4.503-0.675   c1.35-1.125,3.6-5.177,3.6-5.177s0.225-1.576-3.376-3.827c-3.601-2.25-5.852-3.825-7.201-4.951   c-1.352-1.125-0.901-4.501,0.448-5.853c1.353-1.351,2.026-2.026,1.576-3.826c-0.451-1.802,0.676-3.152,4.052-2.927   c3.376,0.226,4.051-0.224,4.051-0.224s0.677,0.449,0.677-0.901c0-1.35,4.275-7.653,3.149-7.653c-1.125,0,0.228-1.575-0.45-4.051   c-0.675-2.477,2.251-6.302-0.224-8.103c-2.476-1.801-3.152-2.702-4.727-5.402c-1.575-2.702-1.352-3.151-7.203-3.827   c-5.852-0.675-8.553,1.351-9.904-0.449c-1.351-1.801-2.025,2.7-2.925-2.702c-0.9-5.402,1.351-9.004,1.351-9.004   s3.601-2.25,4.5-3.826c0.9-1.576,4.501-2.251,7.43-1.125c2.926,1.125,7.201,0.9,10.804,1.577c3.601,0.674,3.376,2.925,5.177,0   c1.8-2.928,0-4.277,1.35-5.853c1.352-1.576,2.926-4.052,4.051-2.477c1.125,1.577,3.379,3.151,5.18,1.125   c1.8-2.025,2.475-2.25,2.475-2.25l0.898,0.901c0,0,2.026-1.127,2.026,0.898c0,2.027,2.027,4.278,0.901,5.853   c-1.127,1.577-2.7,1.351-2.7,5.177c0,3.828,0,3.152,2.474,6.304c2.477,3.15,4.052,0.449,4.502,3.826   c0.451,3.376,0.899,2.702,3.377,4.952c2.476,2.25,2.024,2.25,3.826,3.601c1.801,1.351,2.702,2.702,2.702,0.451s0.225-3.376,0-5.402   c-0.227-2.025,1.801-3.602,0.448-6.978c-1.35-3.376-0.224-3.151-2.925-5.627c-2.702-2.475-4.503,0.451-5.401-3.151   c-0.901-3.601,4.275-5.177,5.627-5.627c1.35-0.449,3.374-3.151,3.824-1.35c0.451,1.8-3.375,8.328,3.153,1.35   c6.526-6.977,3.601-4.051,3.601-4.051s3.376-0.45,4.051,0c0.674,0.451,2.478-2.026,1.8-1.8c-0.675,0.226-7.2-3.602-7.2-3.602   l-4.729-2.7c0,0,1.577-1.126,2.702-0.9c1.126,0.225,1.352-2.251,2.478-2.477c1.125-0.225,8.777,1.577,10.354,2.477   c1.575,0.9,7.201,1.125,6.525,0.675c-0.675-0.451-4.275-3.151-4.501-4.052c-0.224-0.9-8.103-2.701-10.578-2.476   c-2.477,0.224-4.726,0.899-6.752,0.224c-2.027-0.675-4.952-2.476-6.528-2.476c-1.575,0-21.382-3.826-22.282-3.601   s-2.252,4.501-2.927,3.826c-0.675-0.675-1.8-0.676-4.953-1.576c-3.149-0.9-7.427-1.576-13.055-2.025   c-5.626-0.45-9.451,0.45-11.027-1.351c-1.576-1.8-4.951-1.125-8.778-1.351c-3.826-0.224-8.328,0-10.354,0s-6.751-0.224-7.877-0.45   s-2.476-1.801-3.826-2.025c-1.352-0.226-1.127-0.675-3.827-1.125c-2.701-0.451-2.476-3.376-3.376-0.901   c-0.9,2.477-0.451,1.801-1.801,2.701c-1.351,0.901-2.701,2.701-3.602,2.701c-0.899,0-4.5,0.225-5.177-0.225   c-0.676-0.45-1.801-0.9-4.052-0.9s-2.251,0.224-5.177-0.226s-5.177-0.226-7.878-1.575c-2.701-1.351-2.701-2.251-4.952-2.026   c-2.249,0.226-2.249-0.45-5.402-0.45c-3.15,0-6.976,1.801-9.003,2.026c-2.024,0.225-6.526-0.226-8.102-0.901   c-1.577-0.675-2.026-2.25-7.879-1.576c-5.852,0.676-9.228,0.676-8.103-1.125c1.126-1.8,2.476-3.601,3.151-3.826   c0.676-0.225,2.25-1.35,1.124-1.8c-1.124-0.451-2.25-1.125-4.95-1.351c-2.702-0.225-2.478,0.9-6.528,0.45   c-4.051-0.45,2.251-1.575-6.076-1.35c-8.328,0.226-10.354,0.9-11.254,0.9c-0.901,0-2.027-1.8-4.277,0.9   c-2.251,2.701-5.404,4.276-9.904,4.501c-4.501,0.226-4.727-0.45-9.002,1.125c-4.277,1.575-6.979-0.45-6.078,3.151   c0.899,3.601,2.026,4.952,2.026,5.627s-2.026,5.177-4.501,2.476c-2.478-2.701-6.979-13.28-4.953-6.077   c2.025,7.202,6.526,9.679,2.251,10.804c-4.276,1.125-3.828-0.45-4.503-0.901c-0.674-0.45,0-3.601-0.225-5.402   c-0.226-1.8-0.675-2.926-1.575-3.826c-0.899-0.901-0.676-2.251-2.476-2.701c-1.801-0.45-0.225-1.351-3.151-1.351   c-2.926,0-5.401-1.801-4.726,2.251c0.674,4.051,1.349,1.351,3.149,5.177s5.177,1.125,2.702,3.826   c-2.476,2.701-9.003,1.801-10.579,0.676c-1.576-1.126-1.125,0.45-4.053-1.576c-2.926-2.026-2.024-3.602-5.4-2.026   c-3.376,1.576-4.502,4.502-5.853,3.376s-4.501,1.575-5.627,0.226c-1.126-1.351-5.628-1.351-6.527,0   c-0.901,1.35-3.602,1.125-7.428,2.926c-3.826,1.8-2.702,0.224-7.428,4.051c-4.728,3.826-7.429,6.977-9.003,4.501   c-1.576-2.475-10.13-6.752-6.753-7.428c3.377-0.675,4.952-2.025,6.753-0.45s4.728,1.126,5.176,0   c0.45-1.126,2.477-2.251-0.225-3.601c-2.701-1.351-2.926-0.451-7.202-2.026c-4.277-1.576,0-1.125-5.853-2.026   c-5.852-0.9-8.329-1.35-9.904-1.8c-1.574-0.45-3.826,0-6.076-0.225c-2.252-0.225-3.826-0.675-5.853-0.45   c-2.025,0.225-3.15-0.225-5.852,1.801c-2.702,2.026-4.728,2.926-6.528,4.501c-1.8,1.575-6.526,4.727-7.877,5.853   c-1.351,1.125-6.078,4.726-6.528,6.077s0.45,2.476-1.351,3.376c-1.801,0.9-3.601,0.9-4.952,1.125c-1.351,0.225,0-2.026-1.351,0.225   c-1.35,2.251-0.9,10.354,0.225,9.228s0.45-4.726,5.402-1.349c4.952,3.375,8.104,2.925,7.878,6.076   c-0.225,3.151,3.376,2.926,3.826,3.602c0.45,0.674,2.701-0.901,2.701-0.901s4.952-3.151,4.952-4.726   c0-1.576,3.151-5.177,3.151-5.177s-2.252-1.125-2.252-3.376c0-2.25,0.677-2.927,1.126-5.178c0.45-2.25-2.476,0.001,4.277-4.277   c6.751-4.276,7.202-1.349,7.202-1.349s0.899,0.9-0.226,2.25c-1.125,1.351-3.151,4.953-3.601,5.402   c-0.451,0.451,2.026,4.052,3.15,4.052c1.126,0,3.377-0.901,4.728-0.676c1.351,0.226,3.601-0.674,4.276-0.224   c0.676,0.45,2.251,1.8,1.125,2.926c-1.125,1.125-3.602,2.475-5.401,2.026c-1.802-0.449-4.503-3.602-2.927,0.9   c1.576,4.502-0.225,5.627-1.576,5.402c-1.349-0.225-4.276-2.475-3.826,0.901c0.451,3.375-2.925,5.626-3.601,5.626   s-2.025-0.225-2.025-0.225s-2.027-0.226-3.151-0.226c-1.126,0-3.377,1.125-4.052,2.026c-0.676,0.9-1.576,0.226-2.701,0.226   s0-1.351-2.251-1.801c-2.25-0.45-3.601-0.9-4.951,0c-1.351,0.9-3.376,1.35-4.277,0.675c-0.9-0.675,0.451-2.252-1.351-1.35   c-1.8,0.9-3.151,3.376-3.826,3.602c-0.675,0.224,2.026,0-0.675,0.224c-2.701,0.226-3.826,0.902-5.177,1.351   c-1.351,0.451,0.45,3.151-2.026,4.051c-2.476,0.9-0.674-1.125-3.151,0.9c-2.476,2.027-2.927,3.827-3.826,4.052   c-0.901,0.226-0.675,0.675-2.701,0.9c-2.026,0.225-1.8,0.45-2.927,0.675c-1.125,0.225,0.226,0.676-2.25,0.225   c-2.477-0.45-4.277,0.451-3.827,1.351c0.45,0.9,8.778,3.376,2.476,3.151c-6.302-0.225-4.276,0.9-2.926,1.8   c1.351,0.9,2.025,1.8,2.701,2.026c0.676,0.225,1.8,2.927,1.8,2.927s1.801-0.226,0.676,1.35c-1.125,1.576,0.45,2.026-0.676,4.052   c-1.125,2.026-1.125,0.675-2.025,1.125c-0.9,0.449-2.251,2.026-4.728,0.675c-2.476-1.351-4.275-2.026-7.202-2.25   c-2.926-0.226-0.901-0.675-2.926,0.899c-2.026,1.577-2.476,3.377-2.25,5.402c0.225,2.025,0.45,4.727-0.226,6.078   c-0.675,1.35-0.675,2.701-0.226,4.727c0.451,2.025,1.802,2.927,1.802,2.927s3.151,0.449,3.826,0.675   c0.675,0.225,2.026-0.45,3.826,0.674c1.801,1.126,3.602,1.577,4.727,0.226c1.125-1.35,5.627-2.926,6.979-4.276   c1.35-1.351,2.25-1.8,1.575-3.151c-0.675-1.351,1.351-4.727,2.476-5.402c1.125-0.675,3.601-1.351,3.601-1.351l2.701-4.051   c0,0,2.251-2.477,3.376-2.251c1.125,0.225,7.427,2.477,6.978-0.449c-0.45-2.927,0.45-3.827,1.125-2.702   c0.675,1.125,2.476,0.675,2.476,0.675s0.9-0.449,1.575,0.226c0.675,0.674,1.575,3.602,2.926,4.276   c1.351,0.676,2.476,1.351,3.377,1.8c0.9,0.451,1.801,0,3.602,1.576c1.8,1.576,3.601,2.477,3.825,3.151   c0.227,0.675,1.802,2.251,1.802,2.251s1.575,0.45,1.125,1.351c-0.45,0.9-2.7,3.602-3.826,4.051c-1.126,0.45-4.051-0.451-2.926,0.45   c1.124,0.9,2.701,2.026,3.376,1.35c0.676-0.675,4.951-5.177,4.951-5.177s-0.225,0.225,0-1.126c0.226-1.349,0-2.925,1.126-2.25   c1.125,0.676,1.801,1.576,2.251,0.676c0.45-0.901,0.9-0.45-0.226-1.125c-1.126-0.676-3.826-4.502-5.177-4.727   c-1.351-0.226-4.728-2.477-4.728-2.477s-0.674-0.675-2.25-2.475c-1.576-1.801-2.025-1.351-2.477-2.927   c-0.449-1.575-1.801-3.601,0.676-3.151c2.477,0.45,4.051,2.025,6.302,3.376c2.251,1.351,1.802,1.8,3.827,3.151   c2.025,1.351,2.252,2.702,3.826,2.477c1.575-0.225,3.377,0.9,3.377,2.926s0.449,4.276,0.899,4.727   c0.451,0.451,1.8,1.351,2.251,2.251c0.45,0.9,1.351,3.151,2.025,4.051c0.676,0.9,1.351,1.576,2.026,2.702   c0.675,1.125,0.9-0.226,1.575,0.225c0.676,0.45,1.576,0.224,1.576-0.676c0-0.9,0.224-2.476,0.224-2.476s3.153-0.9,2.253-1.351   c-0.901-0.45-3.603-3.151-3.377-4.051c0.225-0.9,0-2.7,1.124-2.475c1.126,0.224,2.252,2.25,4.728,0.449s5.402-2.701,4.501,0   c-0.899,2.701,0.227,3.15,0,6.077c-0.224,2.927,0.902,2.026,2.478,3.602c1.575,1.576,2.7,1.802,3.825,2.251   c1.126,0.451,2.926,0.226,4.728,0.451c1.801,0.225,2.926-0.676,4.502-0.225c1.574,0.45,5.176-0.226,5.852,0.225   c0.676,0.45,3.377-0.9,3.601,0.675c0.225,1.576,1.126-0.225,0.451,3.376s-1.576,6.077-1.576,6.077   c-2.476,4.727-3.376,5.853-4.502,6.078c-1.124,0.225-1.8,0.9-3.825,0.675c-2.026-0.226-4.502,0-7.428-0.675   c-2.926-0.676-8.329,0.675-10.579-0.676c-2.251-1.35-5.402-0.225-6.754-1.8c-1.35-1.576-3.6-1.351-4.501-2.251   c-0.9-0.9-1.35-3.375-1.35,0.226c0,3.602-2.026,3.826-2.476,5.627c-0.451,1.8,0.674,0.9-1.802,0.675   c-2.476-0.226-3.151,1.125-6.752-1.575c-3.602-2.701-5.402-2.701-7.202-3.827c-1.802-1.126-3.602,2.025-5.402-1.575   c-1.801-3.602-4.277-0.676-4.502-3.602c-0.225-2.927,0-2.7,0.225-4.501c0.227-1.801,2.701-3.376,1.576-4.051   c-1.126-0.675-0.226-1.801-1.801-1.125c-1.576,0.675-3.826,0.9-5.627,1.575c-1.801,0.676,4.051,0-4.727,0.676   c-8.778,0.675-11.255,1.575-11.255,1.575s-0.675-0.45-1.801,0.45c-1.125,0.9-2.701,2.251-4.276,1.576   c-1.575-0.676-2.476-0.451-3.826-0.225c-1.351,0.225-2.25-1.125-3.826,0c-1.576,1.124-3.376,1.575-4.052,1.124   C347.851,133.176,346.725,131.376,346.725,131.376z M497.305,279.479c-0.675,2.477-3.151,6.077-3.151,6.077l-4.503,2.251c0,0-1.573,1.351-2.475,1.576   c-0.9,0.224-3.151,1.351-3.151,1.351s-2.025-0.451-1.351,1.574c0.675,2.026,0.901,4.503,0.675,5.177   c-0.224,0.676-0.224,2.027-0.224,3.828c0,1.8-0.675,4.05-1.801,4.5c-1.125,0.451-2.251,0.901-2.026,2.477   c0.226,1.576,0.226,6.302,0.226,6.302l2.927,4.502c0,0,0.9-0.675,2.701-0.675c1.799,0,3.601-1.574,3.601-1.574   s2.027,0.448,1.8-2.026c-0.225-2.477,0.902-5.402,0.675-6.078c-0.224-0.675,2.027-3.602,2.027-4.276   c0-0.676,2.251-3.825,2.251-4.952c0-1.125,1.575-2.926,1.8-4.275c0.225-1.352,0.45-4.502,0.9-5.402   c0.451-0.9,0.676-1.801,0.676-2.701s0-2.701,0-2.701L497.305,279.479z M673.544,309.866c-0.675,0.899-1.125,10.579-1.575,11.704s-1.351,6.978-0.899,8.327   c0.449,1.352,1.124,6.303,0.675,7.879c-0.451,1.575,0.225,6.527-0.902,6.302c-1.124-0.226-1.573,0.226-1.573,0.9   c0,0.676,1.573,2.025,1.573,2.025s2.703,0.001,3.828-0.225c1.125-0.225,3.376-1.351,5.177-1.351s2.927-1.351,4.501-1.351   c1.576,0,4.953-1.124,5.853-0.675c0.9,0.449,2.25-2.701,3.826-2.025c1.576,0.675,4.953-1.576,6.528-1.576   c1.574,0,2.251-2.477,4.052-2.025c1.8,0.45,5.177-0.9,6.753-0.227c1.573,0.677,4.051-2.25,5.176,0   c1.126,2.252,4.503,3.152,4.503,4.277s-0.228,3.602-0.228,3.602l2.702-0.226c0,0,4.275-2.701,4.952-2.701   c0.675,0,2.251-2.25,2.251-1.124c0,1.124-1.352,3.602-1.801,4.726c-0.45,1.126,0.449,2.477,0.449,2.477s2.253,1.125,1.352,3.15   c-0.901,2.026,0.224,1.577,0,3.151c-0.226,1.576,0,0.9,0.898,1.8c0.902,0.901,2.479,2.479,3.828,2.252   c1.352-0.226,1.8-1.575,2.926-0.9c1.125,0.675,3.375,0.225,4.05,1.126c0.678,0.899-4.275,3.15,4.278-0.675   c8.553-3.828,9.451-4.728,10.577-6.079c1.129-1.35,2.479-2.7,3.377-3.601c0.901-0.9,0.227-0.675,2.926-2.701   c2.701-2.025,2.701-1.125,5.179-4.952c2.476-3.825,4.275-5.176,4.727-5.852c0.45-0.676,1.35-0.9,1.575-3.603   c0.225-2.7,2.025-5.176,2.025-6.076c0-0.899,0.675-2.249,0.45-3.826c-0.225-1.576,0.901-3.825-0.45-6.076   c-1.351-2.252,0.675-3.15-1.351-4.053c-2.026-0.9-3.376-0.449-3.826-2.025c-0.451-1.576-2.252-1.351-2.927-5.627   s-3.376-4.728-3.376-4.728s-2.701-1.125-2.026-1.574c0.677-0.451,0.901-3.603,0.677-4.503c-0.226-0.9-0.226-2.926-0.9-4.275   c-0.675-1.352-1.126-3.151-1.801-4.728c-0.675-1.575-1.8-2.026-2.251-3.826s-1.126-2.477-1.35-2.926   c-0.227-0.45-0.678-2.7-1.126-0.226c-0.45,2.476-1.352,7.202-1.352,7.202s-1.801,3.828-2.476,4.953   c-0.675,1.124-1.35,4.051-2.475,3.825c-1.126-0.225-1.803,1.127-2.701,0.9c-0.901-0.226-2.251,0.226-2.926-0.449   c-0.675-0.676-2.476-2.476-3.377-2.702c-0.9-0.224-1.575-2.024-2.251-2.024c-0.677,0-1.801-1.577-1.575-2.477   c0.224-0.9,0.449-2.925,0.675-3.826c0.224-0.9,1.576-2.927,1.576-2.927s0-1.35-1.126-1.35c-1.125,0-1.351,0-3.827-0.226   c-2.475-0.226-3.149-0.45-4.052-0.45c-0.898,0,0.902-0.45-1.575,0.225c-2.475,0.677-3.601,2.477-5.177,4.053   c-1.573,1.575-0.224,1.124-1.573,1.575c-1.353,0.451-1.126-1.126-2.027,1.351c-0.901,2.476,0.451,3.15-0.227,3.601   c-0.675,0.451-5.4-1.575-5.4-1.575s1.125-0.226,0.224-1.351c-0.899-1.126-1.8-2.7-3.149-2.025   c-1.353,0.675-2.479,1.126-3.377,2.251c-0.901,1.125-0.901,2.025-1.576,2.925c-0.675,0.9-2.475,0.9-2.701,1.801   c-0.225,0.901-0.225,3.151-0.899,3.376c-0.675,0.226-0.9-0.898-1.575-1.124c-0.675-0.225-0.451-2.026-0.9-0.9   c-0.45,1.125-0.9,0.899-1.575,2.7c-0.677,1.801-0.901,3.377-1.576,3.602c-0.675,0.226,0,0.45-2.027,1.576   c-2.024,1.125-2.475,1.125-5.4,2.476c-2.925,1.351-2.25,1.351-4.276,1.575c-2.025,0.226-2.477,0.901-3.827,1.126   c-1.352,0.225-2.25,0.449-3.602,1.8c-1.35,1.351-2.475,1.8-3.375,2.026S673.544,309.866,673.544,309.866z M686.823,220.958c-0.899,1.352-3.825,5.402-4.95,5.628c-1.126,0.224-2.252,1.351-3.152,1.125   s-2.926,0-3.601,2.926s-1.801,4.502-2.478,4.276c-0.675-0.225,1.125,4.276-2.7,2.477c-3.825-1.801-2.475,1.576-2.926,2.477   c-0.45,0.899,0.675,3.376,0.9,4.276c0.227,0.9,0.9,2.476,1.801,3.825c0.9,1.351,1.575,2.926,3.151,2.478   c1.576-0.452,6.526,0,6.526,0s1.803,0.675,2.927,0.675c1.125,0,1.351-0.45,2.025-0.45s2.025-2.252,1.801-2.476   c-0.225-0.227-0.899-0.901,0.45-2.252c1.351-1.351,2.926-1.8,3.152-3.376c0.225-1.575-0.45-1.575,0.225-2.477   c0.675-0.9,2.25-0.673,1.801-1.575c-0.451-0.9,0.449-0.675-0.451-2.477c-0.899-1.8-2.026-2.476-1.126-4.727   c0.901-2.25,1.803-2.701,1.577-4.051c-0.226-1.352,1.125-1.801-0.451-3.377c-1.574-1.574-2.25-2.025-3.376-2.477   C686.823,220.958,686.823,220.958,686.823,220.958z M730.939,243.467c0.902-0.225,4.052-2.476,4.278,1.576c0.225,4.051,0.448,2.925,1.801,5.176   c1.35,2.251,2.248,2.928,3.824,1.802c1.575-1.127,3.376-1.127,3.826-3.151c0.451-2.026,0.451-2.026,1.801-2.026   c1.353,0,1.801-0.225,2.479,0.677c0.674,0.898,1.122-0.002,4.05,1.574c2.926,1.576,5.401,1.124,7.204,2.701   c1.801,1.575,2.701,1.352,5.176,2.251c2.476,0.9,1.35-0.45,3.601,2.026c2.252,2.475,1.353,3.15,2.476,4.276   c1.125,1.125,2.027-0.901,1.576,1.8s-3.601,0,1.126,3.825c4.726,3.828,5.402,4.504,6.976,5.628   c1.577,1.126,2.702,2.477,1.353,2.477c-1.353,0-5.628,0-6.077-0.676c-0.451-0.675-2.476-1.126-3.828-2.701   c-1.349-1.574-4.275-2.701-4.949-4.051c-0.677-1.352-1.577-1.801-2.702-1.801s-2.25,1.35-3.827,2.926   c-1.576,1.575-0.898-0.899-2.926-0.225c-2.027,0.676-4.275-0.226-5.402-1.126c-1.126-0.9-0.899-2.25-2.699-1.575   c-1.803,0.675-2.926,0.225-2.251-1.125c0.675-1.352,0.224-3.152,0.224-3.152s0.677-2.251-0.898-2.7   c-1.576-0.449-1.576-2.025-3.152-2.477c-1.577-0.449-4.051-1.575-4.051-1.575s-0.225,0-0.901-0.225   c-0.675-0.226-0.675-0.226-2.476-0.675c-1.8-0.451-3.152-0.002-4.051-1.126c-0.902-1.125-0.451-2.701-0.451-2.701   s3.601,0.45,0-2.251c-3.601-2.7-3.601-2.7-3.601-2.7s0.448-0.226,0.224-0.676C728.465,243.015,730.939,243.467,730.939,243.467z M629.653,224.784c0,0,1.125,1.127,2.926,0.901c1.8-0.226,3.149,3.601,4.277,4.951   c1.124,1.351,1.801,2.026,4.276,3.602c2.475,1.575,2.25-1.351,5.627,3.376c3.376,4.726,1.8,1.801,3.376,4.726   c1.575,2.929,2.476,4.503,3.376,5.18c0.899,0.675,1.576,2.474,1.802,3.15c0.224,0.675,1.799,2.7,1.799,3.376   c0,0.675,0.451,2.476-0.899,4.051c-1.351,1.576-2.477,1.801-2.477,1.801s-2.701-1.351-3.601-2.701   c-0.901-1.35-2.025-2.476-3.602-5.176c-1.575-2.702-3.376-5.628-4.276-6.978c-0.9-1.352-2.251-2.703-2.926-4.052   c-0.675-1.352-2.476-5.402-3.376-5.853s-1.126-1.8-2.702-3.376c-1.574-1.576-1.35-2.926-2.025-3.826   c-0.675-0.9-2.25-2.928-2.25-2.928L629.653,224.784z M191.868,400.35c-1.576-0.9-4.952-2.476-6.077-3.376c-1.125-0.9-4.501-5.854-4.501-5.854l-2.477-4.727   c0,0-2.925-3.601-2.25-4.951c0.675-1.351,2.026-2.251,2.026-2.926s1.35-2.477,0.224-3.151c-1.125-0.676-1.125-0.9-1.801-2.926   c-0.675-2.025-0.675-3.828-1.575-4.277c-0.901-0.449-1.576-3.376-2.476-3.601c-0.9-0.226-1.801-1.801-1.801-1.801l-1.351-18.232   c0,0-0.451-8.327-0.9-10.129c-0.451-1.8,0.675-5.626-0.451-9.003c-1.125-3.376,0.226-7.427-0.45-8.778   c-0.675-1.351,0.45-5.176-0.225-8.777s2.701-8.103,0-9.453c-2.701-1.352-0.675-3.377-2.926-3.377c-2.25,0-3.826-1.126-5.852-2.7   c-2.026-1.576-5.853-4.503-6.978-5.629c-1.125-1.124-4.727-4.051-5.852-4.951c-1.125-0.9-2.251-4.727-3.151-5.853   c-0.9-1.124-1.35-4.5-2.701-6.526c-1.351-2.025-3.151-5.401-3.602-6.077c-0.45-0.675-5.402-6.527-5.402-6.527l0.45-3.601   c0,0,3.376-2.026,2.926-2.701c-0.45-0.676,0.226-1.352-1.351-2.701c-1.576-1.352-1.351-3.828,0-4.952   c1.351-1.127,3.376-4.728,3.376-4.728l3.376-5.626c0,0,2.702-2.928,2.702-4.953s3.826-3.375,1.575-5.176   c-2.251-1.802-1.125-3.377-1.801-4.728c-0.676-1.35-0.225-2.25,1.801-3.601s5.627-6.302,5.627-6.302s2.701-0.676,3.376-0.676   s1.801-7.204,3.827-2.477c2.026,4.727,2.701,2.251,2.026,5.627c-0.676,3.376,0.9,2.702,1.8,1.802c0.9-0.902-0.451,0.675,1.35-3.378   c1.8-4.051,1.126-5.401,2.251-4.275c1.125,1.126,1.575,1.351,3.601,2.026c2.025,0.675,2.701,0.449,3.375,1.8   c0.675,1.351,0.451-0.45,4.277,0.226c3.826,0.676,9.228-1.351,8.553,0.899c-0.675,2.251-2.026-0.225,1.125,2.251   c3.151,2.477,3.602,2.926,5.402,3.377c1.8,0.45,3.376,0.225,6.078,2.926c2.701,2.7,3.376,2.926,4.051,4.275   c0.675,1.352,1.8,0.451,2.926,1.801c1.125,1.352,2.701,1.352,4.276,1.352c1.575,0,0-1.352,2.476,0.45   c2.477,1.8,4.277,2.024,5.402,5.626c1.125,3.604,3.376,3.377,1.575,6.979c-1.8,3.602-5.401,5.177-3.826,4.952   c1.575-0.226,4.502-1.577,5.402-1.351c0.9,0.224,1.35-0.675,2.701,0s1.576-0.9,1.351,0.675c-0.226,1.576-0.226,0-0.226,1.576   c0,1.575-0.45-1.576,2.251-0.9c2.701,0.675,1.125-1.352,4.276,1.575c3.152,2.927,3.152,2.027,4.276,3.602   c1.126,1.574,2.251-0.899,2.927-0.225s2.701,0.224,4.727,0.675c2.026,0.449,0.675-1.35,3.827,0.675   c3.15,2.025,6.302,1.35,6.977,3.151c0.675,1.8,2.477,1.125,3.376,2.251s1.35-0.451,2.251,1.126c0.9,1.574,3.602,1.124,3.151,2.699   c-0.451,1.577,0.674,0.676,0.224,2.926c-0.449,2.253-2.026,5.854-3.375,6.753c-1.351,0.901-1.35,2.026-2.251,3.151   c-0.9,1.127-0.675-1.125-1.801,2.026c-1.125,3.152-0.9,3.602-1.8,6.527s-0.225,0-0.9,2.926c-0.675,2.926-0.225,4.727-0.9,8.104   c-0.675,3.375-0.45,3.376-0.9,5.852c-0.45,2.476,1.125-1.124-0.901,4.051c-2.025,5.178-2.25,4.951-2.925,7.203   c-0.676,2.252,0.225,0.45-2.251,1.801c-2.476,1.352-1.125,0.9-4.052,1.801c-2.925,0.9-6.527,1.802-7.652,2.026   s-5.627,1.575-4.276,4.275c1.351,2.702,1.351,3.152,0,6.529c-1.351,3.375-3.376,4.502-3.376,6.076c0,1.575-0.901,3.15-1.125,4.276   c-0.226,1.126,2.025-1.126-0.675,2.251c-2.701,3.376-2.926,2.476-3.827,4.502c-0.9,2.025,0,0.449-0.9,2.025   c-0.9,1.575-3.151,2.25-3.151,2.25s0.224,1.126-0.676,0.676c-0.901-0.449-0.675,0.225-4.052-0.676   c-3.376-0.9-3.826-3.149-4.276-1.575c-0.45,1.575,0.225,2.477,2.251,4.052c2.025,1.576,5.402,2.025,4.501,3.602   c-0.9,1.576-0.9,1.576-1.575,2.476c-0.676,0.901,0.9,0.225-0.676,0.901c-1.575,0.675-2.476,3.602-3.151,3.602   c-0.675,0-1.126,1.125-2.026,0.675c-0.9-0.451-3.15-2.026-3.601-1.126c-0.45,0.899-1.351-1.126-1.126,2.025   c0.226,3.151,0.676,4.952-0.45,5.628c-1.125,0.675-3.827,0-3.827,0l-0.45-1.126l-1.575,0.45c0,0-0.675,2.701,0.45,3.151   c1.125,0.45,0.9,0.899,2.025,2.25c1.126,1.351,0.451,3.827,0.451,3.827s0,0.676-1.125,1.801c-1.125,1.125-1.576,2.026-1.801,2.701   c-0.226,0.675-1.576,3.602,0.45,3.376c2.025-0.226,3.602-1.351,3.602,2.251c0,3.601,0.9,2.702-0.225,5.177   c-1.126,2.476-2.026,2.701-2.251,4.951c-0.224,2.251,0.226,2.476,0.676,3.827c0.45,1.351,1.576,0.675,0.45,1.351   C195.244,401.024,191.868,400.35,191.868,400.35z M133.796,217.132l-1.575-2.25c0,0-0.675-1.352-1.801-1.576s-3.602-3.151-3.602-3.151   s-1.125-0.9-1.125-2.475c0-1.576-0.901-4.051-0.226-6.752c0.676-2.7,0.901-6.077,0.676-6.978c-0.226-0.9,1.125-1.125-0.45-2.026   c-1.576-0.9-4.727-1.125-6.753-1.125c-2.025,0-4.502,0.676-4.952,0.9c-0.45,0.225,2.476-6.752,2.926-7.877   c0.45-1.125,2.476-6.078,2.476-6.752c0-0.676,0.675-0.901-0.675-1.8c-1.35-0.901-3.601-1.351-4.952-0.676   c-1.35,0.676-1.125-0.9-2.25,1.8c-1.125,2.702-2.251,5.628-3.602,6.078c-1.35,0.451-4.051,1.801-4.051,1.801   s-3.376-0.225-4.502-0.45c-1.125-0.225-5.852-2.701-6.752-4.276c-0.9-1.576-1.35-4.953-1.35-6.527c0-1.576,2.475-6.302,2.25-7.428   c-0.225-1.125,2.477-5.627,2.251-6.303c-0.226-0.675,0.45-2.926,1.125-3.826s4.052-2.026,4.952-2.926   c0.9-0.901,2.476-2.025,4.051-2.476s2.927-0.9,4.052-0.9s4.051-2.476,4.501,0c0.451,2.475,2.477,1.575,3.602,1.8   c1.125,0.226,1.351,1.351,3.151-1.575c1.801-2.927,3.601-3.827,3.601-3.152c0,0.676,2.926-0.224,3.376,0.451s1.351-0.451,2.926,0.9   c1.576,1.351,3.826,1.576,3.601,2.25c-0.225,0.675,0.9,0.675,0.9,1.351c0,0.675,0.901-1.576,0.901,2.475   c0,4.052,1.125,6.528,1.125,6.528s1.575,3.377,2.25,2.701c0.675-0.675,2.025-2.475,2.025-2.475s2.251-1.351,0.676-6.078   c-1.576-4.726-0.45-6.077-0.9-7.653c-0.451-1.576-0.451-2.477,2.25-4.502c2.701-2.025,9.228-6.527,10.804-7.427   c1.575-0.9,5.176-3.376,5.176-3.376s1.35-0.675,1.576-2.476c0.225-1.8,4.501-4.952,4.727-5.852c0.226-0.9,3.152-3.15,3.152-3.15   s3.15-1.802,2.925-2.926c-0.225-1.125,4.052-3.15,4.727-3.15c0.675,0,4.277,1.124,4.277-0.902c0-2.025,0-2.476,2.251-4.276   c2.25-1.8,5.176-4.502,6.302-4.502c1.125,0,4.952-2.024,6.527-2.475c1.576-0.451,6.528-2.702,2.026,0   c-4.502,2.7-1.576,1.125-2.476,3.376c-0.899,2.25-1.576,5.177,2.701,1.8c4.277-3.376,4.051-4.052,5.627-4.276   c1.576-0.225,0.45,0.675,3.826-0.451c3.377-1.125,3.602-1.575,3.602-1.575s1.576-1.351,0.675-2.025   c-0.9-0.676,0.901-1.576-2.476-0.226c-3.376,1.351-3.151,1.576-5.402,0.9c-2.25-0.675-5.627-0.451-3.151-2.702   c2.476-2.25,5.627-2.926,3.601-3.826c-2.025-0.9-7.202,0.226-7.877,0.45c-0.676,0.225-2.251-0.225-3.602,0   c-1.35,0.225-0.9-1.799,0-2.25c0.901-0.451,3.827-1.802,7.428-2.702c3.601-0.9,12.38-1.125,14.405-1.125s4.726,0.451,6.302-0.675   c1.575-1.125,4.727-2.925,5.177-3.827c0.451-0.9,2.251-2.25,2.251-2.25s2.025-2.026,0.9-2.926c-1.125-0.9-2.251-2.926-3.151-2.476   c-0.9,0.45-0.224,3.152-2.025,0.225c-1.801-2.925-1.576-3.376-2.476-4.051c-0.9-0.675-1.801-0.226-1.125-3.376   c0.675-3.151,0.45-4.502,0.45-4.502s0.675-2.7,0-2.925c-0.676-0.226-1.125-0.9-2.25-0.226c-1.126,0.675-7.428,3.827-8.778,4.502   c-1.351,0.675-3.152-2.701-2.477-4.276c0.676-1.577,0.225-0.676-0.675-2.926c-0.9-2.251-4.501-2.702-5.852-2.702   s-4.501-2.026-5.402-0.675c-0.9,1.35-5.626,5.626-6.528,6.077c-0.9,0.451-2.25-3.826-2.925,3.151   c-0.676,6.979,2.476,9.004-1.125,9.454s-6.753,2.475-6.753,2.475s-2.925,0.226-2.925,2.026c0,1.802-1.125,6.077-2.477,6.527   c-1.35,0.451-4.727-0.224-5.852-1.575c-1.125-1.351,0.225-6.302,0.225-6.302l2.026-2.026c0,0-14.405-2.25-14.181-3.151   c0.226-0.9-4.276-2.475-4.726-3.826c-0.45-1.351-0.676-4.277-0.225-5.402c0.45-1.125,6.527-6.527,9.678-7.652   c3.151-1.126,8.553-3.601,10.129-4.052c1.576-0.45,4.276-0.225,5.177-1.35c0.9-1.126,1.125-3.151,1.125-3.151   s-0.45-3.152,0.45-2.702c0.9,0.451,2.476,1.126,2.701,1.801c0.226,0.675,0.226,2.251,1.801,0.449   c1.576-1.8,3.602-2.476,5.402-3.375c1.801-0.901,4.501-0.675,6.078-1.575c1.575-0.9,4.276-1.801,4.501-4.052   c0.225-2.25-0.675-1.575-1.801-1.801c-1.125-0.224,0.45,0.226-3.376,2.026c-3.827,1.8-2.701,0.45-5.402,1.8   c-2.701,1.351-2.927,1.576-3.151,0.451c-0.226-1.126,0.45-2.926,0.45-2.926s0.226-0.226-1.35-0.675   c-1.576-0.45-1.576,0.225-1.801-1.8c-0.225-2.026,1.125-4.952-1.125-4.052c-2.251,0.9-4.276-0.675-5.852,3.826   c-1.576,4.501-6.978,9.229-8.329,8.103c-1.35-1.125-1.575-1.351-2.701-1.351s-2.701-1.35-4.727-1.575s-8.104-0.225-9.678,0   c-1.576,0.226-3.376-0.9-4.728,0.451c-1.35,1.35-3.375,3.151-3.375,3.827c0,0.675-2.026-2.477-2.701-2.251   c-0.675,0.225-2.477-0.9-4.501-0.9c-2.026,0-3.377-1.126-4.051-1.126c-0.675,0,0.674-1.801,0-2.026   c-0.675-0.224-15.307-0.675-15.307-0.675s-4.726-1.8-6.526-1.575c-1.801,0.225-6.752,0.449-10.58,1.125   c-3.827,0.675-9.454,2.926-11.254,3.151c-1.801,0.226-5.852,0.226-6.527-0.9c-0.676-1.125,0.225-0.9-0.676-1.125   c-0.9-0.224-0.224-0.675-2.25-2.25c-2.026-1.576,0.901-2.926-3.151-2.926c-4.051,0-6.527-0.226-10.128,0   c-3.602,0.225-11.029,2.025-11.929,1.8c-0.9-0.225-8.103,1.126-9.229,0.451c-1.125-0.676-6.753,2.475-7.877,2.25   c-1.125-0.225-5.402,0.226-6.527,0.901c-1.126,0.676-6.528,2.025-4.727,3.151c1.8,1.125,1.575,2.25,1.8,2.926   c0.226,0.675-1.8,2.25-1.8,2.25s-0.451,0-2.926-0.9c-2.476-0.901-5.177-1.35-6.303-0.675c-1.125,0.675-3.151,2.027-2.701,2.927   c0.451,0.9,3.601,2.926,4.052,2.25c0.45-0.675,1.576-2.025,2.926-1.8c1.351,0.226,3.377-0.9,1.576,1.351   c-1.801,2.25-3.377,3.376-4.502,3.602c-1.125,0.224-3.826,0.449-6.302,0.675c-2.477,0.226-2.252-0.9-4.502,1.351   c-2.25,2.25-3.151,0.9-3.601,3.376c-0.45,2.475-0.9,2.475,0,3.151c0.9,0.675-1.801,0.9,0.225,1.575   c2.025,0.676,4.501,1.351,4.276,2.025c-0.226,0.676,2.251-0.899,0.9,0.9c-1.351,1.802-2.25,3.376,0.45,1.576   c2.701-1.8,4.276-0.451,6.527-1.576c2.251-1.125,4.502-1.35,5.852-2.25c1.351-0.901,2.026-2.25,4.052-2.927   c2.026-0.675,0.675,0.226,0.9,1.351c0.225,1.125,0,1.35,1.351,0.449c1.35-0.9,1.35-0.224,3.151-1.35   c1.8-1.125,3.826-2.251,5.177-1.576c1.35,0.676,1.8,0.676,2.701,0.676c0.9,0-1.125-0.226,0.9,0c2.026,0.224-0.9-0.676,5.852,0.9   c6.753,1.575,8.554,0.45,9.003,2.926c0.451,2.476,1.351-0.226,2.476,1.35c1.125,1.575,1.801,0.226,2.476,2.926   c0.675,2.702,0,10.129-0.45,11.029c-0.45,0.9-0.675,0.9-0.45,2.926c0.225,2.025,2.926,11.705,2.026,12.379s-2.926,0.9-2.926,0.9   l-1.125,4.051c0,0-1.8,3.376-3.376,5.177c-1.576,1.8-3.601,4.052-4.727,5.626c-1.125,1.576-2.026,4.278-3.601,5.853   c-1.575,1.575-2.926,0.9-2.476,4.276c0.45,3.376,0,6.977,0.45,9.454c0.451,2.476,1.576,5.852,2.476,7.203   c0.9,1.35,1.576,1.35,3.151,2.475c1.576,1.125,3.602,2.477,3.376,3.602c-0.225,1.125,0.225,8.104,0.225,8.104   s1.351,2.25,1.575,4.726c0.226,2.477,1.801,4.952,1.801,4.952l1.351,2.927c0,0,0.675,0.226,1.576,2.025   c0.9,1.801,0.9,1.801,1.125,2.7c0.226,0.902,0.226,0.676,0.226,0.902c0,0.224-0.226-3.827-0.676-4.953   c-0.45-1.125-0.45-2.475-0.9-3.826c-0.45-1.351,0.225-2.927-1.125-4.952c-1.35-2.025-1.35-2.251-2.025-4.277   c-0.675-2.025-1.576-4.276-0.675-4.727c0.9-0.449,1.575-3.375,3.376,0c1.8,3.376,2.026,2.477,2.251,5.178   c0.224,2.701,0.9,3.602,1.575,4.726c0.675,1.125,2.25,4.953,3.151,6.527c0.9,1.576,0-0.9,2.025,2.251   c2.026,3.151,2.252,3.826,3.377,6.302s1.801,2.476,2.476,4.276c0.675,1.802,0.225,1.351-0.226,3.376   c-0.45,2.025,0.45,4.277,0.45,4.277s3.151,1.125,3.376,1.8c0.225,0.675,3.376,1.8,3.827,2.701c0.45,0.901,3.376,2.025,3.376,2.025   s2.476,1.576,3.375,2.026c0.901,0.45,3.603,0.901,3.603,0.901s1.8,0.451,2.475,0.675c0.675,0.225,2.701,0.225,2.701,0.225   s1.801-1.35,2.476-0.9c0.675,0.449,2.251-0.901,2.926,0.224c0.675,1.126,2.026,1.126,2.701,2.027c0.675,0.9,1.35,0.9,2.476,2.025   s2.251,0.9,3.376,1.8c1.125,0.9,2.025,0.9,3.376,0.9c1.35,0,1.35,0,2.251,0.226c0.899,0.225,1.35-0.676,2.25,0.451   c0.9,1.125,1.575,1.8,2.25,2.925c0.675,1.125,2.251,1.125,2.476,2.926c0.225,1.8,0.675,1.577,0.675,3.151   c0,1.576,0.9,2.251,1.576,2.702c0.674,0.449,3.15,2.699,3.15,2.699l3.376,0.676l2.701,2.026L133.796,217.132z M205.935,8.03l13.505-1.688c0,0,4.726,0,7.09-1.688c2.363-1.688,0-1.688,7.09-3.038   c7.09-1.351,5.065-2.026,8.779-1.351c3.713,0.676,4.726,0.676,8.778,1.351c4.051,0.675,5.064-0.337,8.777,0.675   c3.714,1.013,5.402,0.675,8.441,0.675c3.038,0,4.727,0,9.453,0c4.727,0,9.116-2.701,10.804-1.013s2.701,1.013,8.441,1.688   c5.739,0.675,8.103-0.676,10.466,0c2.364,0.675,6.416-0.337,11.142,0c4.726,0.337,7.09-0.337,8.778-0.337s3.375-2.364,5.739-0.338   c2.364,2.026,5.402-0.675,5.739,2.026c0.338,2.701,4.727,0.675,0.338,2.701c-4.389,2.026-3.714,1.688-6.753,4.389   c-3.038,2.701,2.026,5.064-4.389,7.428c-6.415,2.363-7.428-1.351-9.116,2.701c-1.688,4.051,0,5.064-0.337,7.09   c-0.338,2.025-1.013,2.363-3.039,4.051c-2.025,1.688-2.025,0-6.752,1.013c-4.727,1.013-8.103,2.026-10.128,2.026   c-2.026,0-6.415,1.688-7.766,2.363c-1.351,0.676,2.364,1.688-4.727,3.714c-7.09,2.026-8.779,1.689-10.804,4.389   c-2.026,2.702-1.351,3.04-2.701,4.728c-1.351,1.688-5.402,8.441-7.428,6.753c-2.025-1.688-3.039-1.351-4.727-3.039   c-1.688-1.688-2.701-4.051-3.714-5.402c-1.013-1.351-1.351-4.727-1.688-6.753s-3.377-6.752,0-6.077   c3.376,0.675,5.402,0.338,6.415-0.337c1.013-0.676,2.026-3.039,2.026-3.039s-0.337-3.714-1.351-5.74   c-1.013-2.026-0.337-3.714-2.025-5.739c-1.688-2.026-1.688-1.688-4.052-3.714c-2.363-2.026-1.688-3.039-5.402-3.376   c-3.714-0.337-4.727-1.351-6.078-1.013c-1.35,0.337-5.739-2.364-1.013-2.701c4.727-0.338,9.116,0.337,9.116,0.337   s6.077-2.701,4.052-3.038c-2.025-0.338,3.038-3.377-1.688-2.364c-4.727,1.013-10.128,2.364-11.479,2.701   c-1.35,0.337-4.727,0.675-8.103,1.688c-3.375,1.013-7.428,0.676-9.453,3.039c-2.026,2.363,0,2.701-2.026,2.363   c-2.025-0.337,1.688-2.363-3.038,0c-4.727,2.364-3.376,2.026-5.739,1.351c-2.364-0.675-4.052-1.688-4.052-1.688   s3.04-0.338-1.35-0.675c-4.389-0.337-4.389-0.337-6.077-2.364c-1.688-2.026-0.675-2.026,0.337-2.701   C205.26,9.381,205.935,8.03,205.935,8.03z M198.507,23.223c-1.688,1.688-5.74,4.052-4.726,5.065c1.013,1.013,1.688,4.727,3.714,3.714   c2.025-1.013-0.338-4.389,7.427-1.688c7.766,2.701,7.09-0.337,8.778,3.714c1.688,4.051,3.038,7.089,2.025,8.103   c-1.012,1.013-1.35,2.026-4.727,3.039c-3.376,1.013-4.727,2.364-2.363,4.051c2.363,1.688,6.753,3.376,8.778,4.39   c2.026,1.012,8.103,1.351,5.064-2.025s0.675-4.39,0.675-4.39s5.74,4.39,3.715-0.675c-2.026-5.064-3.377-5.064-2.026-5.064   s4.051,1.688,4.051,1.688l1.351-2.701l-1.351-4.389l-4.389-4.389c0,0,3.713-3.376-1.351-4.051   c-5.064-0.675-4.727-0.675-7.428-2.364c-2.701-1.688-3.038-2.363-8.103-1.35c-5.064,1.013-6.752,1.688-6.752,1.688L198.507,23.223z    M123.218,27.275c2.026-2.026,7.428-6.752,9.454-5.402c2.025,1.35,5.063-1.013,7.427,1.013   c2.363,2.026,5.064,4.389,7.09,5.064c2.026,0.675,4.389-1.688,6.415-0.675c2.025,1.013,9.115-5.064,7.765-0.337   c-1.351,4.727,1.688,6.077-2.026,6.415c-3.714,0.338-7.765,3.039-9.454,2.026c-1.688-1.013-3.039-2.026-5.74-0.675   c-2.701,1.35-1.35,1.35-4.389,0.675c-3.038-0.675-3.713,0.675-4.388-0.338c-0.676-1.012-2.701-0.675-2.364-3.714   c0.337-3.038,1.35-2.701-0.676-2.701c-2.025,0-3.713,0.338-5.064-0.675C125.918,26.938,123.218,27.275,123.218,27.275z");
map.bgContext.stroke(map.world);
map.bgContext.fill(map.world);

map.el = document.createElement("canvas");
map.el.setAttribute("width", "800");
map.el.setAttribute("height", "430");

map.context = map.el.getContext("2d");
map.context.lineCap = "round";
map.context.lineWidth = 3;
map.context.strokeStyle = 'rgba(255,50,0,0.5)';
map.context.fillStyle = 'floralwhite';

for (i=-3; i<3; ++i) {
  map.context.beginPath();
  map.context.moveTo(160, 120);
  map.context.quadraticCurveTo(260, 100-8*i, 365, 95);
  map.context.stroke();
  map.context.closePath();
}

map.container.appendChild(map.el);
map.container.appendChild(map.bg);
